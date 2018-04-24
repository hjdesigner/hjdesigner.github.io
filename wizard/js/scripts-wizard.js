(function(){
	var itemsCheck = 0;
	var arrayLocal = [];
	var arrayDetails = [];
	var arrayAddress = [];
	var arrayContact = [];
	var beaches = [];
	var dados;
	var latApi;
	var lngApi;

	function nextLocal() {
		$('[data-id="comodo"]').removeClass('active');
		$('[data-id="comodo"]').addClass('finish');
		$('[data-id="detalhes"]').addClass('active');
		$('.wizard-local').hide();
		$('.wizard-details').show();
		var width = window.innerWidth;
		if (width <= 949) {
			$('.wizard-session-mobile #wizard-nav-room').removeClass('active');
			$('.wizard-session-mobile #wizard-nav-details').addClass('active');
		}
		details();
	}
	function nextDetails() {
		$('[data-id="detalhes"]').removeClass('active');
		$('[data-id="detalhes"]').addClass('finish');
		$('[data-id="endereco"]').addClass('active');
		$('.wizard-details').hide();
		$('.wizard-address').show();
		var width = window.innerWidth;
		if (width <= 949) {
			$('.wizard-session-mobile #wizard-nav-details').removeClass('active');
			$('.wizard-session-mobile #wizard-nav-address').addClass('active');
		}
		address();
	}
	function nextAddress() {
		$('[data-id="endereco"]').removeClass('active');
		$('[data-id="endereco"]').addClass('finish');
		$('[data-id="contato"]').addClass('active');
		$('.wizard-address').hide();
		$('.wizard-contact').show();
		var width = window.innerWidth;
		if (width <= 949) {
			$('.wizard-session-mobile #wizard-nav-address').removeClass('active');
			$('.wizard-session-mobile #wizard-nav-contact').addClass('active');
		}
		contact();
	}
	function scrollHeader() {
		var width = window.innerWidth;
		if (width >= 950) {
			$('body,html').animate({
    		scrollTop: $('.wizard-header').position().top
    	}, 500);
		} else {
			$('body,html').animate({
    		scrollTop: $('body').position().top
    	}, 500);
		}
	}
	function filePreview(image, files, li) {
		var reader  = new FileReader();
		var preview = image;
		var file    = files;
		li.classList.add('active');

		if ( /\.(jpe?g|png|pdf)$/i.test(file.name) && file.size <= 5242880) {
			reader.addEventListener("load", function () {
    		preview.src = reader.result;
  		}, false);

			if (file) {
    		reader.readAsDataURL(file);
  		}
		} else {
			alert('Imagens só poderão ser nos formatos: JPG, PNG e PDF \nTamanho máximo de cada arquivo deverá ser no máximo de 5 Mb')
		}
	}

	function desabledLocal() {
		var width = window.innerWidth;
		if (width >= 950) {
			if ($('.wizard-local__list .active').length) {
				$('[data-id="next-local"]').removeAttr("disabled");
			} else {
				$('[data-id="next-local"]').attr('disabled', 'true');
			}
		}
	}

	function checkLocal() {
		var width = window.innerWidth;
		if (width <= 949) {
			$('[data-id="next-local"]').removeAttr("disabled");
		}
		$('.wizard-local__list li').on('click', function() {
			if ($(this).hasClass('active')){
				$(this).removeClass('active');
				itemsCheck--;
				desabledLocal()
				return
			}
			if (itemsCheck >= 2) {
				return;
			}
			itemsCheck++;
			$(this).addClass('active');
			desabledLocal()
		})
		$('[data-id="next-local"]').on('click', function() {
			arrayLocal = [];
			$.each($('.wizard-local__list li'), function(i, v) {
				if ($(this).hasClass('active')) {
					arrayLocal.push($(this).attr('data-id'))
				}
			})
			nextLocal();
			scrollHeader();
		});
		$('[data-id="jump-local"]').on('click', function() {
			nextLocal();	
			scrollHeader();
		});
	}
	function details() {
		var countdownProject = $('[data-id="countdowProject"]');
		var countdownDescription = $('[data-id="countdownDescription"]');
		var button = $('[data-id="next-details"]');
		var inputProject = $('[data-id="nameProject"]');
		var inputDescription = $('[data-id="description"]');
		var widthDetails = window.innerWidth;

		if (widthDetails <= 949) {
			$('#wizard-open-description').on('click', function() {
				scrollHeader();
				$('.wizard-details-rigth').show();
				$('body').addClass('wizard-no-scroll');
			});
			$('#wizard-description-cancel').on('click', function() {
				$('.wizard-details-rigth').hide();
				$('body').removeClass('wizard-no-scroll');
			});
			$('#wizard-description-save').on('click', function() {
				var valueDescription = $('#wizard-details-textatea-description').val();
				if(valueDescription !== '') {
					$('.wizard-details-rigth').hide();
					$('body').removeClass('wizard-no-scroll');
					$('#wizard-open-description').addClass('finish');
					return
				}
				$('.wizard-details-rigth').hide();
				$('body').removeClass('wizard-no-scroll');
				$('#wizard-open-description').removeClass('finish');
			});
		}

		$('[data-id="comodo"]').on('click', function() {
			$('.wizard-details').hide();
			$('.wizard-contact').hide();
			$('.wizard-address').hide();
			$('.wizard-local').show();
		});

		inputProject.on('keydown', function() {
			if ($(this).val().length > 24) {
				$(this).addClass('error');
				$(this).next('p').addClass('error');
				button.attr('disabled', true);
			} else {
				if (inputDescription.length <= 450) {
					button.attr('disabled', false);
				}
				$(this).removeClass('error');
				$(this).next('p').removeClass('error');			
			}
			countdownProject.html($(this).val().length);
		});

		inputDescription.on('keydown', function() {
			if ($(this).val().length >450) {
				$(this).addClass('error');
				$(this).next('p').addClass('error')
				button.attr('disabled', true);
				$('#wizard-description-save').attr('disabled', true);
			} else {
				if (inputProject.val().length <= 24) {
					button.attr('disabled', false);
				}
				$(this).removeClass('error');
				$(this).next('p').removeClass('error');
				$('#wizard-description-save').attr('disabled', false);
			}
			countdownDescription.html($(this).val().length);
		});

		if (arrayLocal.length == 0) {
			$('.wizard-details__measures').hide();
		} else if (arrayLocal.length == 1) {
			$('.wizard-details__rooms2').hide();
			$('[data-is="romm1"]').html(arrayLocal[0]);
			$('[data-id="roomsSelect"]').html(arrayLocal[0]);
		} else if (arrayLocal.length == 2) {
			$('[data-is="romm1"]').html(arrayLocal[0]);
			$('[data-is="romm2"]').html(arrayLocal[1]);
			$('[data-id="roomsSelect"]').html(arrayLocal[0] + ', ' + arrayLocal[1]);
		}

		$('[data-id="file1"]').on('click', function() {
			$('#fileImage1').click();
		});
		$('[data-id="file2"]').on('click', function() {
			$('#fileImage2').click();
		});
		$('[data-id="file3"]').on('click', function() {
			$('#fileImage3').click();
		});
		$('[data-id="file4"]').on('click', function() {
			$('#fileImage4').click();
		});
		$('[data-id="close1"]').on('click', function() {
			$('[data-id="fileImage1"]').removeClass('active');
			$('#fileImage1').val('');
			$('#image1').attr('src','');
		});
		$('[data-id="close2"]').on('click', function() {
			$('[data-id="fileImage2"]').removeClass('active');
			$('#fileImage2').val('');
			$('#image2').attr('src','');
		});
		$('[data-id="close3"]').on('click', function() {
			$('[data-id="fileImage3"]').removeClass('active');
			$('#fileImage3').val('');
			$('#image3').attr('src','');
		});
		$('[data-id="close4"]').on('click', function() {
			$('[data-id="fileImage4"]').removeClass('active');
			$('#fileImage4').val('');
			$('#image4').attr('src','');
		});

		$('#fileImage1').change(function() {
			var image = document.querySelector('#image1');
			var files = document.querySelector('#fileImage1').files[0];
			var li = document.querySelector('[data-id="fileImage1"]');
			filePreview(image, files, li);
		});
		$('#fileImage2').change(function() {
			var image = document.querySelector('#image2');
			var files = document.querySelector('#fileImage2').files[0];
			var li = document.querySelector('[data-id="fileImage2"]');
			filePreview(image, files, li);
		});
		$('#fileImage3').change(function() {
			var image = document.querySelector('#image3');
			var files = document.querySelector('#fileImage3').files[0];
			var li = document.querySelector('[data-id="fileImage3"]');
			filePreview(image, files, li);
		});
		$('#fileImage4').change(function() {
			var image = document.querySelector('#image4');
			var files = document.querySelector('#fileImage4').files[0];
			var li = document.querySelector('[data-id="fileImage4"]');
			filePreview(image, files, li);
		});

		$('[data-id="next-details"]').on('click', function() {
			arrayDetails = [];
			arrayDetails.push({
				name: inputProject.val(),
				description: inputDescription.val(),
				room1: $('[data-id="room1Height"]').val() + 'x' + $('[data-id="room1Width"]').val(),
				room2: $('[data-id="room2Height"]').val() + 'x' + $('[data-id="room2Width"]').val(),
				image1: $('#image1').attr('src'),
				image2: $('#image2').attr('src'),
				image3: $('#image3').attr('src'),
				image4: $('#image4').attr('src'),
			});
			$('[data-id="detailsSelect"]').removeClass('hide');
			nextDetails();
			scrollHeader();
		});
		$('[data-id="jump-details"]').on('click', function() {
			nextDetails();
			scrollHeader();
		});
	}
	function selectStore(title){
		$.each(dados, function(i, v) {
			if( title === v.Nome ) {
				$('.wizard-modal__input').hide();
				$('.wizard-modal__list').hide();
				$('.wizard-modal-item__header p').html(v.Nome);
				$('#wizard-modal-address').html(v.Rua + ', ' + v.Numero + ' - ' + v.Bairro + ' - ' + v.Municipio)
				$('#wizard-modal-highlighter').html(v.HorarioFuncionamento)
				$('.wizard-modal-item__footer button').attr('data-title', v.Nome);
				$('.wizard-modal-item').show();
			}
		})
		
	}
	function jsonStore(data) {
			dados = data;
			var htmlList;
			var viewList = $('.wizard-modal__list ul');
			var viewListMobile = $('.wizard-modalMobile__list ul');
			var viewLengthMobile = $('#wizardLengthMobile');
			var firstStory = data[0]
			var viewStore = $('#wizard-addres-p-store');
			var viewAddress = $('#wizard-addres-p');
			var place = dados.length > 1 ? ' locais' : ' local';
			var completeAddress = firstStory.Rua + ', ' + firstStory.Numero + ' - ' + firstStory.Bairro + ' - ' + firstStory.Municipio;
			viewList.html('');
			viewListMobile.html('');
			viewStore.html(firstStory.Nome);
			viewAddress.html(completeAddress)
			viewLengthMobile.html(dados.length + place)
			$.each(dados, function(i, v) {
				beaches.push([v.Nome, v.Latitude, v.Longitude])
				htmlList = '<li id="loja-'+v.Nome.replace(/-/g, '').replace(/ /g, '')+'">' +
					'<figure><img src="https://www.casasbahia-imagens.com.br/App_Themes/CasasBahia/img/retira-facil/logo/CasasBahia.png" alt=""></figure>' +
					'<p>'+ v.Nome +'</p>' +
					'<i></i>'
				'</li>';
				htmlListMobile = '<li id="lojaMobile-'+v.Nome.replace(/-/g, '').replace(/ /g, '')+'">' +
					'<figure><img src="https://www.casasbahia-imagens.com.br/App_Themes/CasasBahia/img/retira-facil/logo/CasasBahia.png" alt=""></figure>' +
						'<div class="wizard-modalMobile__list-text">' +
							'<p class="list-title">'+ v.Nome +'</p>' +
							'<p class="list-address"><span>Endereço</span> '+ v.Rua +', '+ v.Numero +' - '+ v.Bairro +' - '+ v.Municipio +'</p>' +
							'<p class="list-address"><span>Horário de Funcionamento</span> '+ v.HorarioFuncionamento +'</p>' +
						'</div>' +
						'<div class="wizard-modalMobile__list-button">' +
							'<button data-title="'+ v.Nome +'" data-address="'+ v.Rua +', '+ v.Numero +' - '+ v.Bairro +' - '+ v.Municipio +'" id="btnMobile-tatuape">Escolher Loja</button>' +
						'</div>' +
					'</li>';
				viewList.append(htmlList);
				viewListMobile.append(htmlListMobile);
			})
			$.ajax({
				url:	"https://maps.googleapis.com/maps/api/geocode/json?address=03191140&key=AIzaSyDR5XxjdXsmwwduvqYbBHwDz-06j3RbHbk&callback",
				data: {
					format: 'json'
				},
				error: function(error) {
					console.log(error)
   			},
   			dataType: 'json',
				success: function(data) {
					$.each(data.results, function(i, v) {
						latApi = v.geometry.location.lat;
						lngApi = v.geometry.location.lng;
					})
					initMap();
				},
   			type: 'GET'
			});
		}
	function getMap() {
		$.ajax({
			url:	"https://henriquemelanda.com.br/wizard/js/db.json?v1",
			data: {
				format: 'json'
			},
			error: function(error) {
				console.log(error)
   		},
   		dataType: 'json',
			success: function(data) {
				jsonStore(data);	
			},
   		type: 'GET'
		});
		
	}
	function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude); 
    console.log(position); 
	}
	function address() {
		var width = window.innerWidth;
		var inputCep = $('[data-id="cep"]');
		inputCep.mask('99999-999');
		if (inputCep.val() !== '') {
			if(inputCep.val().length === 9) {
				$.ajax( "https://viacep.com.br/ws/"+ inputCep.val() +"/json/" )
					.done(function(data) {
						$('[data-id="rua"]').val(data.logradouro);
						$('[data-id="bairro"]').val(data.bairro);
						$('[data-id="cidade"]').val(data.localidade);
						$('[data-id="estado"]').val(data.uf);
					});
				getMap();
			}
		}

		$('#buttonSearchModal').on('click', function() {
			var input = $('#imputSearchModal').val();
			if (input !== '') {
				getMap();
			}
		})
		$('#buttonSearchModalMobile').on('click', function() {
			var input = $('#buttonSearchModalMobile').val();
			if (input !== '') {
				getMap();
			}
		})
		$('#geolocation').on('click', function() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition);
    	} else {
        console.log("Geolocation is not supported by this browser.");
    	}
		})

		if (width >= 950) {
			$(document).on('click', '.wizard-modal__list li', function() {
				var title = $(this).find('p').html();
				selectStore(title);
			});
			$('.wizard-modal-item__header i').on('click', function() {
				$('.wizard-modal__input').show();
				$('.wizard-modal__list').show();
				$('.wizard-modal-item').hide();
			});
			$('.wizard-address-store__buttons button').on('click', function(){
				$('.wizard-modal').fadeIn();
			});
			$('.wizard-modal__header-close').on('click', function(){
				$('.wizard-modal').fadeOut();
			})
			$('.wizard-modal-item__footer button').on('click', function() {
				var title = $(this).attr('data-title');
				var address = $('.wizard-modal-item__content .address').html();
				$('.wizard-address-store__local .store').html(title);
				$('.wizard-address-store__local .address').html(address);
				$('.wizard-modal').fadeOut();
			});
		} else {
			$('.wizard-address-store__buttons #wizard-addres-store-button').on('click', function(){
				scrollHeader();
				$('body').addClass('wizard-no-scroll');
				$('#wizard-modalMobile').fadeIn();
			});
			$('#wizard-modalMobile .wizard-modalMobile__header-close').on('click', function(){
				$('#wizard-modalMobile').fadeOut();
				$('body').removeClass('wizard-no-scroll');
			})
			$(document).on('click', '#wizard-modalMobile .wizard-modalMobile__list li button', function() {
				$('body').removeClass('wizard-no-scroll');
				var title = $(this).attr('data-title');
				var address = $(this).attr('data-address');
				$('.wizard-address-store__local .store').html(title);
				$('.wizard-address-store__local .address').html(address);
				$('#wizard-modalMobile').fadeOut();
			});

		}
		
		
		$('[data-id="next-address"]').on('click', function() {
			arrayAddress = []
			arrayAddress.push({
				cep: $('[data-id="cep"]').val(),
				rua: $('[data-id="rua"]').val(),
				numero: $('[data-id="numero"]').val(),
				complemento: $('[data-id="complemento"]').val(),
				bairro: $('[data-id="bairro"]').val(),
				cidade: $('[data-id="cidade"]').val(),
				estado: $('[data-id="estado"]').val(),
				loja: $('.wizard-address-store__local .store').html(),
				address: $('.wizard-address-store__local .address').html(),
			});
			$('[data-id="addressSelect"]').removeClass('hide');
			nextAddress();
			scrollHeader();
		})
		$('[data-id="jump-address"]').on('click', function () {
			nextAddress();
			scrollHeader();
		})
		$('[data-id="detalhes"]').on('click', function() {
			$('.wizard-address').hide();
			$('.wizard-contact').hide();
			$('.wizard-local').hide();
			$('.wizard-details').show();
		});
	}
	function setMarkers(map) {
    var image = {
    	url: 'https://www.casasbahia-imagens.com.br/App_Themes/CasasBahia/img/retira-facil/logo/CasasBahia.png',
      size: new google.maps.Size(45, 45),
      origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(0, 45),
    };
    for (var i = 0; i < beaches.length; i++) {
			var beach = beaches[i];
			var marker = new google.maps.Marker({
      	position: {lat: beach[1], lng: beach[2]},
        map: map,
        icon: image,
      	title: beach[0]
			});
			marker.addListener('click', function(e) {
				selectStore(this.title);
  		});
  	}
  }
	function initMap() {
		var map = new google.maps.Map(document.getElementById('wizard-map'), {
    	zoom: 13,
      center: {lat: latApi, lng: lngApi}
    });
    setMarkers(map);
	}

	function validaEmail(email){
    var str = email;
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if(filtro.test(str)) {
      return true;
    } else {
      return false;
    }
  }

	function contact() {
		$('[data-id="phone"]').focusout(function(){
    	var phone, element;
    	element = $(this);
    	element.unmask();
    	phone = element.val().replace(/\D/g, '');
    	if(phone.length > 10) {
        element.mask("(99) 99999-999?9");
    	} else {
        element.mask("(99) 9999-9999?9");
    	}
		}).trigger('focusout');
		$('[data-id="next-contact"]').on('click', function() {
			var checkCallme = $('#callme');
			var checkSendemail = $('#sendemail');
			var inputName = $('[data-id="fullName"]').val();
			var inputPhone = $('[data-id="phone"]').val();
			var inputEmail = $('[data-id="email"]').val();
			var validEmail = validaEmail(inputEmail);
			
			if (inputName === '') {
				alert('Por favor preencha seu nome');
				return;
			}
			if (checkCallme.is(':checked')) {
				if (inputPhone === '') {
					alert('Por favor preencha seu telefone')
					return;
				}
			}
			if (checkSendemail.is(':checked')) {
				if (inputEmail === '') {
					alert('Por favor preencha seu email')
					return;
				}
				if (validEmail === false) {
					alert('Preencha com um e-mail válido.')
					return;
				}
			}
			if (!checkSendemail.is(':checked') && !checkCallme.is(':checked')) {
				alert('Por favor selecione uma forma de contato')
				return;
			}
			arrayContact = [];
			arrayContact.push({
				name: inputName,
				phone: inputPhone,
				email: inputEmail
			});
			$('[data-id="wizard-stage"]').hide();
			$('.wizard-banner').show();
			$('[data-id="wizard-success"]').addClass('wizard-success');
			$('[data-id="wizard-success"]').show();
			success();
		});
		$('[data-id="endereco"]').on('click', function() {
			$('.wizard-contact').hide();
			$('.wizard-details').hide();
			$('.wizard-local').hide();
			$('.wizard-address').show();
		});
	}

	function success() {

		if (arrayLocal.length > 0) {
			for(var i = 0; i <= arrayLocal.length; i++) {
				var room = i !== arrayLocal.length ? arrayLocal[i] + ', ' : arrayLocal[i];
				$('[data-id="success-room"]').append(room);
			}
		}
		if (arrayDetails.length > 0) {
			var room1 = arrayDetails[0].room1 !== undefined && arrayDetails[0].room1 !== '' ? arrayDetails[0].room1 + ' m ' : '';
			var room2 = arrayDetails[0].room2 !== undefined && arrayDetails[0].room2 !== '' ? ' / ' + arrayDetails[0].room2 + ' m' : '';
			$('[data-id="nomeProject"]').html(arrayDetails[0].name);
			$('[data-id="success-measures"]').append(room1);
			$('[data-id="success-measures"]').append(room2);
			$('[data-id="success-description"]').html(arrayDetails[0].description);
			$('[data-id="success-photo-1"]').html(arrayDetails[0].image1 !== '' ? '<img src="'+ arrayDetails[0].image1 +'" >' : '');
			$('[data-id="success-photo-2"]').html(arrayDetails[0].image2 !== '' ? '<img src="'+ arrayDetails[0].image2 +'" >' : '');
			$('[data-id="success-photo-3"]').html(arrayDetails[0].image3 !== '' ? '<img src="'+ arrayDetails[0].image3 +'" >' : '');
			$('[data-id="success-photo-4"]').html(arrayDetails[0].image4 !== '' ? '<img src="'+ arrayDetails[0].image4 +'" >' : '');
		}
		if (arrayAddress.length > 0) {
			$('[data-id="success-store"]').html(arrayAddress[0].loja);
			$('[data-id="success-address"]').html(arrayAddress[0].address);
		}
		if (arrayContact.length > 0) {
			$('[data-id="success-email"]').html(arrayContact[0].email !== '' ? '<span>E-mail:</span> ' + arrayContact[0].email : '');
			$('[data-id="success-phone"]').html(arrayContact[0].phone !== '' ? '<span>Telefone:</span> ' + arrayContact[0].phone : '');

		}	
	}

	$(document).ready(function(){
		checkLocal();
	});
})(jQuery)



