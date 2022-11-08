<template>
    <div class="h-20 flex flex-row justify-between border-b ">
        <div class="flex ">
            <img class="py-4 " src="../Public/image/Frame.svg" alt="">
        </div>
        <ul class="block leading-[5rem] ">
            <li class="inline-block px-2 text-base relative ">
                Trang chủ
                <div class="border-home"></div>
            </li>
            <li class="inline-block px-2 text-base">Gửi tiền</li>
            <li class="inline-block px-2 text-base">Về chúng tôi</li>
        </ul>
        <div class="">
            <button class="border-2 rounded-[3rem] h-10 my-7 px-5 mx-2 font-semibold">Đăng nhập</button>
            <button class="border-2 rounded-[3rem] h-10 my-7 px-5 bg-slate-800 text-amber-500 font-semibold">Đăng Ký</button>
            <img src="../Public/image/icon.svg" class="inline-block mx-4 " alt="">
            <img src="../Public/image/Vector.svg" class="inline-block " alt="">
        </div>
    </div>

</template>

<style >
.line-height-24{
    line-height: 96px;
}
.border-home{
    width: 50%;
    height: 0.2em;
    background-color: #ffd530;
    position: absolute;
    bottom: 0;
    left: 25%;
}
</style>