'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class UploadController extends Controller {
  async upload() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    console.log(1111111, file);
    // 确保上传的文件存在
    if (!file) {
      ctx.throw(400, 'No file uploaded');
    }
    
    // 获取文件名和目标路径
    const filename = path.basename(file.filename);
    const targetPath = path.join(this.config.baseDir, 'app/public/uploads', filename);

    try {
      // 移动文件到指定目录
      await fs.promises.rename(file.filepath, targetPath);
      
      // 设置文件的访问 URL
      const fileUrl = `/public/uploads/${filename}`;
      
      // 返回成功响应
      ctx.body = { url: fileUrl, message: 'File uploaded successfully' };
    } catch (err) {
      // 处理文件移动错误
      ctx.throw(500, 'File upload failed');
    } finally {
      // // 清理临时文件
      // await fs.promises.unlink(file.filepath);
    }
  }
}

module.exports = UploadController;
