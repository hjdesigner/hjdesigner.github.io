(function(){
	var itemsCheck = 0;
	var arrayLocal = [];
	var arrayDetails = [];
	var arrayAddress = [];
	var arrayContact = [];
	var beaches = [
  	['Mooca', -23.5606307, -46.5854571],
    ['Tatuape', -23.5467317, -46.5740591],
    ['Metro Tatuape 3', -23.5421352, -46.5761956],
  ];

	function nextLocal() {
		$('[data-id="comodo"]').removeClass('active');
		$('[data-id="comodo"]').addClass('finish');
		$('[data-id="detalhes"]').addClass('active');
		$('.wizard-local').hide();
		$('.wizard-details').show();
		details();
	}
	function nextDetails() {
		$('[data-id="detalhes"]').removeClass('active');
		$('[data-id="detalhes"]').addClass('finish');
		$('[data-id="endereco"]').addClass('active');
		$('.wizard-details').hide();
		$('.wizard-address').show();
		address();
		initMap();
	}
	function nextAddress() {
		$('[data-id="endereco"]').removeClass('active');
		$('[data-id="endereco"]').addClass('finish');
		$('[data-id="contato"]').addClass('active');
		$('.wizard-address').hide();
		$('.wizard-contact').show();
		contact();
	}
	function scrollHeader() {
		$('body,html').animate({
    	scrollTop: $('.wizard-header').position().top
    }, 500);
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

	function checkLocal() {
		$('.wizard-local__list li').on('click', function() {
			if ($(this).hasClass('active')){
				$(this).removeClass('active');
				itemsCheck--;
				if ($('.wizard-local__list .active').length) {
					$('[data-id="next-local"]').removeAttr("disabled");
				} else {
					$('[data-id="next-local"]').attr('disabled', 'true');
				}
				return
			}
			if (itemsCheck >= 2) {
				return alert('Selecionar no máximo 2 ambientes');
			}
			itemsCheck++;
			$(this).addClass('active');
			if ($('.wizard-local__list .active').length) {
				$('[data-id="next-local"]').removeAttr("disabled");
			} else {
				$('[data-id="next-local"]').attr('disabled', 'true');
			}
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
			} else {
				if (inputProject.val().length <= 24) {
					button.attr('disabled', false);
				}
				$(this).removeClass('error');
				$(this).next('p').removeClass('error');
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
		$('.wizard-modal__input').hide();
		$('.wizard-modal__list').hide();
		$('.wizard-modal-item__header p').html(title);
		$('.wizard-modal-item__footer button').attr('data-title', title);
		$('.wizard-modal-item').show();
	}
	function address() {
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
			}
		}
		$('.wizard-modal__list li').on('click', function() {
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
      center: {lat: -23.5657732, lng: -46.5713469}
    });

    setMarkers(map);
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
		var room1 = arrayDetails[0].room1 !== '' ? arrayDetails[0].room1 + ' m ' : '';
		var room2 = arrayDetails[0].room2 !== '' ? ' / ' + arrayDetails[0].room2 + ' m' : '';
		for(i = 0; i <= arrayLocal.length; i++) {
			var room = i !== arrayLocal.length ? arrayLocal[i] + ', ' : arrayLocal[i];
			$('[data-id="success-room"]').append(room);
		}
		$('[data-id="nomeProject"]').html(arrayDetails[0].name);
		$('[data-id="success-measures"]').append(room1);
		$('[data-id="success-measures"]').append(room2);
		$('[data-id="success-description"]').html(arrayDetails[0].description);
		$('[data-id="success-photo-1"]').html(arrayDetails[0].image1 !== '' ? '<img src="'+ arrayDetails[0].image1 +'" >' : '');
		$('[data-id="success-photo-2"]').html(arrayDetails[0].image2 !== '' ? '<img src="'+ arrayDetails[0].image2 +'" >' : '');
		$('[data-id="success-photo-3"]').html(arrayDetails[0].image3 !== '' ? '<img src="'+ arrayDetails[0].image3 +'" >' : '');
		$('[data-id="success-photo-4"]').html(arrayDetails[0].image4 !== '' ? '<img src="'+ arrayDetails[0].image4 +'" >' : '');
		$('[data-id="success-store"]').html(arrayAddress[0].loja);
		$('[data-id="success-address"]').html(arrayAddress[0].address);
		$('[data-id="success-email"]').html(arrayContact[0].email !== '' ? '<span>E-mail:</span> ' + arrayContact[0].email : '');
		$('[data-id="success-phone"]').html(arrayContact[0].phone !== '' ? '<span>Telefone:</span> ' + arrayContact[0].phone : '');
	}

	$(document).ready(function(){
		checkLocal();
	});
})(jQuery)



