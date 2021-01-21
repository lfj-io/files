var langVN=document.querySelector('a[href*="misc/language"]').innerText.match(/ng\sVi/ig)?true:false;
var langEN=document.querySelector('a[href*="misc/language"]').innerText.match(/english/ig)?true:false;
var langZH=false;
if(langEN ==false && langVN==false){langZH=true; }


if(langVN==true){
   document.querySelector('.media__body .uix_welcomeSection__text').innerText='Đây là nơi để người dùng LFJ đặt câu hỏi hoặc cung cấp phản hồi về các sản phẩm của LFJ. Người dùng LFJ có thể thảo luận về sản phẩm có liên quan hoặc cung cấp mẹo để sử dụng LFJ cho cộng đồng,cũng như nhận trợ giúp từ những người dùng LFJ khác.';
} else if(langZH==true){
   document.querySelector('.media__body .uix_welcomeSection__text').innerText='LFJ 用户可以在这里提出问题或提供有关 LFJ 产品和服务的反馈意见，与其他 LFJ 用户和爱好者讨论产品和服务，向社区提供使用 LFJ 产品和服务的技巧，并获得其他用户的帮助。';

}

