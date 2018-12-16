<template>
    <div>
       <!-- <a href="https://paoyici-city-poc.oss-cn-beijing.aliyuncs.com/uploads/tmp/portal/2018/2af8a0d5-acb8-410e-80d1-747563ec58db/1.png" download="1.png">
        </a>-->
         <a>
              <button @click="download('https://paoyici-city-poc.oss-cn-beijing.aliyuncs.com/uploads/tmp/portal/2018/2af8a0d5-acb8-410e-80d1-747563ec58db/1.png')">下载图片</button>
         </a>
      <a>
        <button @click="download('https://paoyici-city-poc.oss-cn-beijing.aliyuncs.com/uploads/tmp/portal/2018/2af8a0d5-acb8-410e-80d1-747563ec58db/1.pdf')">下载文件(输入自己的路径)</button>
      </a>

    </div>
</template>

<script>
    /**
     *@author       叶章浩
     *@date         2018/11/26 19:22
     *@Copyright    天源迪科信息技术股份有限公司
     *@Description
     */
    export default {
        name: "download",
        data () {
            return {
                show:true
            }
        },
        computed: {

        },
        methods: {
            getFileType: function (name) {
                let fileType = true;//默认true是图片，false是文件
                let nameSplitLength = name.split('.').length - 1;//分割文件名，取最后一个
                if (name.split('.')[nameSplitLength].toLowerCase() == 'png' || name.split('.')[nameSplitLength].toLowerCase() == 'jpg' || name.split('.')[nameSplitLength].toLowerCase() == 'jpeg') {

                } else {
                    fileType = false;
                }
                return fileType;
            },
            getFileName(str){
                debugger;
                str = str.substring(str.lastIndexOf("/") + 1);
                return str;
            },
            downloadIamge(imgsrc,name) {//下载图片地址和图片名
                debugger;
                var image = new Image();
                // 解决跨域 Canvas 污染问题
                image.setAttribute("crossOrigin", "anonymous");
                image.onload = function() {
                    var canvas = document.createElement("canvas");
                    canvas.width = image.width;
                    canvas.height = image.height;
                    var context = canvas.getContext("2d");
                    context.drawImage(image, 0, 0, image.width, image.height);
                    var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
                    var a = document.createElement("a"); // 生成一个a元素
                    var event = new MouseEvent("click"); // 创建一个单击事件
                    a.download = name || "photo"; // 设置图片名称
                    a.href = url; // 将生成的URL设置为a.href属性
                    a.dispatchEvent(event); // 触发a的单击事件
                };
                image.src = imgsrc;
            },
            download(imgurl) {
                debugger;
                let name=this.getFileName(imgurl);
                if (this.getFileType(name)) {
                    //img
                    this.downloadIamge(imgurl,name);
                } else {
                    //file
                    window.open(imgurl);
                }
            }

        },
        created() {

           /* this.initLocalCache();
            this.getServiceData();
            this.getCommonConfig();*/
        }
    }
</script>

<style >


</style>
