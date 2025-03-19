# parse-reasoning
用于处理AI模型流式输出Reasoning的过程。包括"think", "reason", "reasoning", "thought"这些标签。  
Used to handle the reasoning process of AI model's streaming output. This includes tags such as "think", "reason", "reasoning", and "thought".

# Install
```
npm install parse-reasoning
```
or  
```
yarn add parse-reasoning
```

# Usage

```javascript
import parseReasoning from 'parse-reasoning';
// or const parseReasoning = require('parse-reasoning')

// Concatenate the content returned by the AI model into a complete string and pass it to parseReason.

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

# API

### parseReasoning(text, tags?)

#### text

Type:```string```  
Required:```true```  
Concatenate the content returned by the AI model into a complete string.  
For example:   
```javascript
    let text;
    for await (const chunk of stream) {
        text += chunk.message.content;
    }
    ...

    parseReasoning(text);
```
#### tags
Type:```string```|```array```  
Required:```false```  
Default:```["think", "reason", "reasoning", "thought"]```  
The reasoning content is wrapped by what tags.

#### return

```
[{type:"reasoning", content:"..."},{type:"text", content:"..."}...]
```
