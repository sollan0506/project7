//Goggle Map

function initialize() {

			/*
				http://openapi.map.naver.com/api/geocode.php?key=f32441ebcd3cc9de474f8081df1e54e3&encoding=euc-kr&coord=LatLng&query=대구중구동인동1가
				
				https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%EC%B2%AD/@37.5651027,126.9781819,16z/
				data=!4m5!1m2!2m1!1z7ISc7Jq47Iuc7LKt!3m1!1s0x357ca2f332cb082b:0xe92b70ac420cf0a8

				위의 링크에서 뒤에 주소를 적으면 x,y 값을 구할수 있습니다.
			*/
			//육의전 건물 - @37.5705067,126.9868907
			//서울시청 - @37.5653161,126.9745883
			//해커스 종로캠퍼스 - @37.5718652,126.9850333
			var Y_point			= 37.5718652;		// Y 좌표
			var X_point			= 126.9850333;		// X 좌표

			var zoomLevel		= 15;						// 첫 로딩시 보일 지도의 확대 레벨

			var markerTitle		= "하이미디어 종로캠퍼스";				// 현재 위치 마커에 마우스를 올렸을때 나타나는 이름
			var markerMaxWidth	= 300;						// 마커를 클릭했을때 나타나는 말풍선의 최대 크기

			// 말풍선 내용
			var contentString	= '<div id="content">' +
					'<div id="siteNotice">' +'</div>'+	
					'<div id="bodyContent">'+ 
						'<p>하이미디어 종로캠퍼스!. <br /><a href="http://jongro.himedia.co.kr/" target="_blank">http://jongro.himedia.co.kr/</a></p>'+	
					'</div>'+ 
				'</div>';

			var myLatlng = new google.maps.LatLng(Y_point, X_point);
			var mapOptions = {
								zoom: zoomLevel,
								center: myLatlng,
								mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

			var marker = new google.maps.Marker({
													position: myLatlng,
													map: map,
													title: markerTitle
			});

			var infowindow = new google.maps.InfoWindow(
														{
															content: contentString,
															maxWidth: markerMaxWidth
														}
			);

			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}