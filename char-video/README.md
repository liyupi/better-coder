# 视频转字符画
> 在线地址：https://char-video.now.sh

## 用法
1. 提供video和canvas两个html标签
   ```html
   <canvas id="charVideoCanvas"></canvas>
   <input type="file" id="file" accept="video/*">
   ```
1. 引入charVideo.js
3. 新建对象，config参数为空将使用默认配置，可覆盖：
    ```javascript
    new CharVideo(config);
    ```
   默认配置：
   ```javascript
   const defaultConfig = {
       space: 10, // 空间
       fileInputId: 'file', // 文件选择框id
       canvasId: 'charVideoCanvas', // 字符画画布
   }
   ```
