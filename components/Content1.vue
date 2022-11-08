<template>
    <div class="py-5 flex flex-row relative w-full h-full">
        <div class="absolute top-[50%] left-[50%] bg-blue-600 w-[500px] h-[500px] opacity-[25%] rounded-full -z-30 -translate-x-1/2 -translate-y-1/2">
            
        </div>
        <div class="flex-1 text-center py-20 flex-col">
            <div>
                <h1 class="text-4xl font-semibold">Gửi tiền tới Việt Nam</h1>
                <h4 class="text-3xl justify-start">và nhiều quốc gia khác</h4>
                <div class="flex flex-row">
                    <div class="flex-1 flex  ">
                        <img src="../Public/image/iconperson.svg" alt="" >
                        <p class="py-3 px-3">Hơn 1 triệu khách hàng</p>
                    </div>
                    <div class="flex-1 flex">
                        <img src="../Public/image/iconmoney.png" alt="">
                        <p class="py-3 px-3">Những chuẩn quy định về giá</p>
                    </div>
                </div>
                <div class="relative">
                    <div>
                        <img src="../Public/image/2ongba.svg" class="absolute"  alt="">
                        <img src="../Public/image/background2ob.svg" class="absolute -top-14 left-3 -z-10"  alt="">

                    </div>
                </div>
            </div>
        </div>
        <div class="flex-1 text-center relative flex-col  ">
            <div>
                <div class="absolute -top-14 -left-[17%]">
                    <span>
                        <img src="../Public/image/bgvuong.svg" alt="">
                    </span>
                </div>
                <div class="absolute -top-4 w-1/2 left-[8%]">
                    <span>
                        <img src="../Public/image/bgchunhat.svg" alt="">
                    </span>
                </div>
            </div>
            <div class="rounded-lg w-[400px] backdrop-blur-[42px] p-8 border-white-1 ">
                <div class="flex py-1 flex-row rounded-lg">
                    <div class=" bg-white flex flex-col w-2/3">
                        <p class=" flex pl-5 justify-start">Số tiền gửi</p>
                        <input type="text" class="flex pl-7 justify-start font-semibold" value="100.000.000">
                    </div>
                    <div class="bg-cyan-500 flex flex-row justify-between w-1/3 px-1">
                        <img src="../Public/image/icon.svg" class="w-7  " alt="">
                        <p class="align-item flex items-center">VND</p>
                        <img src="../Public/image/Vector.svg" class=" w-5" alt="">
                    </div>
                </div>
                <div class="py-1 flex flex-col">
                    <div class="flex my-2 w-full justify-between items-start flex-row">
                        <div class=" items-start"><ul><li>Lệ Phí</li></ul></div>
                        <div class="items-end">
                            <div class="text-sm">
                                <p class="inline-block opacity-70 line-through ">!6 AUD</p>
                                3 AUD
                            </div>
                            <div class="text-lime-600"> Giảm 50% lệ phí </div>
                        </div>
                    </div>
                    <div class="flex my-2 justify-between w-full flex-row">
                        <div class=" items-start"><ul><li>Tỉ Giá</li></ul></div>
                        <div class="items-end">
                            <div class="text-sm">
                                1 AUD = 16900 VND
                            </div>
                        </div>
                    </div>
                    <div class="flex my-2 justify-between w-full flex-row">
                        <div class=" items-start"><ul><li>Tỉ lệ đảm bảo</li></ul></div>
                        <div class="items-end">
                            <div class="text-sm">
                                <p class="inline-block opacity-70 ">1.20633
                                </p>
                                <img src="../Public/image/tangtruong.svg" class="w-10 inline-block" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex py-1 flex-row rounded-lg">
                    <div class=" bg-white flex flex-col w-2/3">
                        <p class=" flex pl-5 justify-start">Số tiền gửi</p>
                        <input type="text" class="flex pl-7 justify-start font-semibold" value="100.000.000">
                    </div>
                    <div class="bg-cyan-500 flex flex-row justify-between w-1/3 px-1">
                        <img src="../Public/image/ensign.svg" class="w-7  " alt="">
                        <p class="align-item flex items-center">AUD</p>
                        <img src="../Public/image/Vector.svg" class=" w-5" alt="">
                    </div>
                </div>
                <div class="flex flex-row relative py-1">
                    <div class="flex flex-1 flex-col  text-center items-center border-r border-solid text-xs">
                        <p class="font-semibold">Tiết kiệm</p>
                        <p >21.29 GBP</p>
                    </div>
                    <div class="border-r border-solid opacity-75 border-black absolute left-[50%] h-full"></div>
                    <div class="flex flex-col flex-1  text-center items-center text-xs">
                        <p class="font-semibold">Vận chuyển</p>
                        <p>trong 4 giờ</p>
                    </div>
                </div>
                <div class="flex flex-row relative py-6">
                    <div class="flex flex-1 flex-col  text-center items-center ">
                        <p class="text-1xl font-semibold">Tổng cộng</p>
                    </div>
                    <div class="flex flex-col flex-1  text-center items-center">
                        <p class="text-1xl font-semibold">100000000 AUD</p>
                    </div>
                </div>
                <div class="flex flex-row relative py-6">
                    <div class="flex flex-1 flex-col  text-center items-center ">
                        
                    </div>
                    <div class="flex flex-col flex-1  text-center items-center">
                        <button class="bg-yellow-500 text-black px-6 py-2 rounded-[3em] shadow-money">Chuyển tiền</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="bg-slate-200 -z-20 absolute w-full h-full backdrop-blur-[42px] "></div> -->
    
</template>

<style>
.shadow-money{
    box-shadow: 0.25em 0.5em 3em rgb(255 213 48 / 80%);
}
</style>