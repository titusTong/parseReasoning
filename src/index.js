const tags = ["think", "reason", "reasoning", "thought"]
const parseReasoning = (text) => {
  try {
    const result = []
    const tagPattern = new RegExp(`<(${tags.join("|")})>`, "i")
    const closeTagPattern = new RegExp(`</(${tags.join("|")})>`, "i")

    let currentIndex = 0
    let isReasoning = false

    while (currentIndex < text.length) {
      const openTagMatch = text.slice(currentIndex).match(tagPattern)
      const closeTagMatch = text.slice(currentIndex).match(closeTagPattern)

      if (!isReasoning && openTagMatch) {
        const beforeText = text.slice(
          currentIndex,
          currentIndex + openTagMatch.index
        )
        if (beforeText.trim()) {
          result.push({ type: "text", content: beforeText.trim() })
        }

        isReasoning = true
        currentIndex += openTagMatch.index + openTagMatch[0].length
        continue
      }

      if (isReasoning && closeTagMatch) {
        const reasoningContent = text.slice(
          currentIndex,
          currentIndex + closeTagMatch.index
        )
        if (reasoningContent.trim()) {
          result.push({ type: "reasoning", content: reasoningContent.trim() })
        }

        isReasoning = false
        currentIndex += closeTagMatch.index + closeTagMatch[0].length
        continue
      }

      if (currentIndex < text.length) {
        const remainingText = text.slice(currentIndex)
        result.push({
          type: isReasoning ? "reasoning" : "text",
          content: remainingText.trim(),
          reasoning_running: isReasoning
        })
        break
      }
    }

    return result
  } catch (e) {
    console.error(`Error parsing reasoning: ${e}`)
    return [
      {
        type: "text",
        content: text
      }
    ]
  }
}

module.exports = parseReasoning;