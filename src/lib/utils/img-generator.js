/**
 * 将图片和文本添加到源图，并生成新图片
 * 注意：请确保请求的图片是同域的，如果是跨域的图片，需要在服务端设置 Access-Control-Allow-Origin:*
 * 参考：https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
 *
 * @src { String } 原图的 url
 * @options { Array } 要添加的图片或文本，参见文档示例
 * @needDownload { Boolean } 是否自动下载生成的图片，默认为 false
 *
 * @return { Promise } 解析完成后会 resolve base64 格式的图片数据
 */

function autoDownload (base64) {
  var a = document.createElement('a');
  a.download = Date.now() + '';
  a.href = base64;
  a.click();
}

export default function (src, options, needDownload = false) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var i = 0;

  return new Promise((resolve, reject) => {
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = src;
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      tick(options);
    }

    function tick (options) {
      var tar = options[i];
      if (!tar) {
        var base64 = canvas.toDataURL();
        if (needDownload === true) {
          autoDownload(base64)
        }
        return resolve(base64)
      }
      if (tar.type === 'image') {
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = tar.src;
        img.onload = function () {
          ctx.drawImage(img, tar.x || 0, tar.y || 0, tar.w || img.width, tar.h || img.height);
          i += 1;
          tick(options)
        }
      }
      if (tar.type === 'text') {
        ctx.font = tar.font || '14px Arial';
        ctx.fillStyle = tar.fill || '#000';
        ctx.fillText(tar.text || '', tar.x || 0, tar.y || 14);
        i += 1;
        tick(options)
      }
    }
  })
}