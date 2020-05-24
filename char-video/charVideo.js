// 视频转字符画类

// 默认配置
const defaultConfig = {
    space: 10, // 空间
    fileInputId: 'file', // 文件选择框id
    canvasId: 'charVideoCanvas', // 字符画画布
}

// constructor
function CharVideo(config = defaultConfig) {
    this.space = config.space || defaultConfig.space;
    this.width = Math.ceil(window.innerWidth / this.space);
    this.height = Math.ceil(window.innerHeight / this.space);
    this.data = {};
    this.cav = {};
    this.ctx = {};
    this.playing = false;
    this.fileInput = $(config.fileInputId || defaultConfig.fileInputId);
    this.charVedio = $(config.canvasId || defaultConfig.canvasId);
    this.charVedio.width = window.innerWidth;
    this.charVedio.height = window.innerHeight;
    this.textCtx = this.charVedio.getContext('2d');
    this.init();
}

// 初始化
CharVideo.prototype.init = function() {
    this.initVideo();
    this.initCanvas();
    this.initEvent();
};

CharVideo.prototype.initVideo = function(src) {
    if (!this.video) {
        this.video = document.createElement('video');
    }
    if (src) {
        this.video.src = src;
    }
};

CharVideo.prototype.initCanvas = function(video) {
    this.cav = document.createElement('canvas');
    this.ctx = this.cav.getContext('2d');
    this.cav.width = this.width;
    this.cav.height = this.height;
};

CharVideo.prototype.loadData = function() {
    return this.ctx.getImageData(0, 0, this.width, this.height);
};

CharVideo.prototype.reDraw = function(data) {
    for (var i = 0, len = data.data.length; i < len; i += 4) {
        var r = data.data[i],
            g = data.data[i + 1],
            b = data.data[i + 2];
        data.data[i] = data.data[i + 1] = data.data[i + 2] = 255 - (r + g + b) / 3 | 0;
    }
    this.data = data
    this.ctx.putImageData(data, 0, 0, 0, 0, this.width, this.height);
};

CharVideo.prototype.drawText = function() {
    this.textCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    var data = this.data.data;
    var points = ' .,`"^:!?o+*wU$HB%@&#M'.split('');
    for (var i = 0, len = data.length; i < len; i += 4) {
        this.textCtx.fillStyle = '#333';
        var xl = (i / 4 | 0) % this.width;
        var yl = Math.ceil(i / 4 / this.width);
        var x = xl * this.space;
        var y = yl * this.space;
        var newData = data[i] | 0;
        var plen = Math.ceil(255 / points.length);
        var point = points[newData / plen | 0]
        this.textCtx.font = "12px courier";
        this.textCtx.fillText(point, x, y);
    }
};

CharVideo.prototype.interval = function() {
    var that = this;
    requestAnimationFrame(function() {
        if (!that.video.paused) {
            that.ctx.drawImage(that.video, 0, 0, that.width, that.height);
            var data = that.loadData();
            that.reDraw(data);
            that.drawText();
        }
        that.interval();
    });
};

// 选择文件事件
CharVideo.prototype.initEvent = function() {
    var that = this;
    this.fileInput.onchange = function(e) {
        var filename = this.value;
        var index = filename.lastIndexOf(".");
        var ext = filename.substr(index + 1);
        if (ext === "mp4") {
            that.initFile();
            e.target.value = null;
        } else {
            alert("仅支持MP4格式");
        }
    }
};

CharVideo.prototype.initFile = function() {
    var file = this.fileInput.files[0];
    if (!file) {
        alert("请选择一个MP4视频文件");
        return false;
    }
    var reader = new FileReader();
    var buffer = [];
    var that = this;
    reader.onload = function() {
        var blob = new Blob([reader.result], { type: 'video/mp4' });
        that.playFile(reader.result, blob);
    }
    reader.readAsArrayBuffer(file);
};

CharVideo.prototype.playFile = function(arrayBuffer, blob) {
    var mediaSource = new MediaSource();
    src = URL.createObjectURL(blob);
    this.initVideo(src);
    this.interval();
    this.video.play();
    $('fileWrapper').style.display = 'none';
    $('originVideo').src = src;
    $('originVideo').style.display = 'block';
    $('originVideo').play();
};

function $(id) { return document.getElementById(id); }