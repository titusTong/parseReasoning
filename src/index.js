/**
 * 解析给定文本中的推理内容
 * 该函数尝试识别文本中关于思考或推理的部分这些部分被特定的标签标记出来
 * 如果提供了自定义标签，则使用这些标签；否则，使用默认标签
 * 
 * @param {string} text - 待解析的文本
 * @param {string|string[]} tags - 用于标识推理部分的标签可以是单个标签字符串，也可以是标签字符串数组
 * @returns {Object[]} 解析结果数组，每个元素包含类型（"text" 或 "reasoning"）和内容
 */
const parseReasoning = (text, tags) => {
  try {
    const defaultTags = ["think", "reason", "reasoning", "thought"];
    const usedTags = tags ? (Array.isArray(tags) ? tags : [tags]) : defaultTags;

    const result = []
    const tagPattern = new RegExp(`<(${usedTags.join("|")})>`, "i")
    const closeTagPattern = new RegExp(`</(${usedTags.join("|")})>`, "i")

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

export default parseReasoning;