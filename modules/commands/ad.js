﻿module.exports.config = {
	name: "ad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hà Mạc Trường Giang",
	description: "Thông tin về admin",
	commandCategory: "Thông tin về admin",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`\n★Thông Tin Admin Bot Này★\nADMIN NAME : ???\nBiệt Danh: ???\nGiới Thiệu: Nhà anh không có gì ngoài nợ ngân hàng 10 tỉ\nI Have Something To You\nI Love You\nTính Cách : Cái gì cái chứ trêu gái là nhanh nhất nhé OwO\nChiều cao : ???\nSinh ngày : ???\nLiên hệ:??? \nInstagram: #####\nTikTok: #@!#@#!@#@!\nSở Thích: Thích chơi game, trêu gái\nCân nặng: ????\nUID FACEBOOK : ????\nName ID : ######### \nLink Facebook : ???\nVài lời tới người dùng BOT: Vui lòng không spam khi sử dụng để tránh die bot. Cảm ơn mọi người đã sử dụng đên con bot của mình.\nLưu ý : Đừng có dại dột mà add 2 bot kẻo bị phát hiện là bạn toang đó <3\nCảnh báo : Vui lòng không dùng bot với mục đích xấu hay cố ý report acc facebook\nChúc bạn sử dụng vui vẻ <3\n=== Dương Thành Đạt ( Cre Pé Pò ) ===`, event.threadID, event.messageID);
