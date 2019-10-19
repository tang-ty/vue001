<template>
    <div>
        <h1>这是 APP 组件</h1>

        <!-- 为什么这里叫做 mt-button 的 button 直接就能用 -->
        <mt-button type="danger" @click="show">default</mt-button>

        <mt-button type="danger" size="large" plain>default</mt-button>

        <mt-button type="default" size="small" disabled>default</mt-button>
        <!-- <myBtn type="primary" size="small" >default</myBtn> -->

        <button type="button" class="mui-btn mui-btn-royal">
			紫色
		</button>


        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">GoodsList</router-link>

        <router-view></router-view>
    </div>
</template>
<script>
// 按需导入 Toast 组件
import { Toast } from "mint-ui";

    export default {
        data () {
            return {};
        },
        created() {
            this.getList()
        },
        methods: {
           
                getList(){
                    // 模拟获取列表的 一个 Ajax 方法
                    this.show();
                    setTimeout ( () => {
                        // 当 3 秒过后，数据获取回来了，要把 Toast 移除
                        this.toastInstanse.close()
                    },3000);
                },
                 show(){
                // Toast('提示消息');
                this.toastInstanse = Toast({
                    message: "这是消息",
                    duration: 5000,
                    position: "top",
                    iconClass: "glyphicon glyphicon-star-empty", // 设置 图标的类
                    className: "mytoast" //自定义 Toast 的样式，需要自己提供一个类名
                });
               
            }
        }
    }
</script>
<style>

</style>