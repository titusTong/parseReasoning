# parse-reasoning
用于处理AI模型流式输出Reasoning的过程。包括"think", "reason", "reasoning", "thought"这些标签。
Used to handle the reasoning process of AI model's streaming output. This includes tags such as "think", "reason", "reasoning", and "thought".

# Install
```
npm install parse-reasoning
```

# Usage

```javascript
import parseReasoning from 'parse-reasoning';
// or const parseReasoning = require('parse-reasoning')


parseReasoning(text).map((e,i) => {
    if(e.type === 'reasoning' && e.content) {
        return (
            ...
            // reasoning过程中的内容，可以用Collapse包裹。
        )
    } else {
        return (
            ...
            // ai模型返回的主内容
        )
    }
})

```





