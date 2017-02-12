---
layout: post
title:  "Botão com sombra longa com CSS3 e SASS"
date:   2017-02-12 18:58:35 -0300
introducao: Botão com sombra longa com CSS3 e SASS
tag: sass, loop em sass, botão com sombra, css3
image: /assests/img/utilizando-sass-para-gerar-cor-e-box-shadow-em-um-loop.jpg
---

Ao lado do design, design de sombra longa é definitivamente continua popular. Ele é usado em muitos estilos mais aparece melhor para ícones.

Neste artigo eu preferi mostrar como você pode facilmente criar botão com sombra longa com CSS box-shadow e usando SASS. Antes de continuar, de uma olhada na demo abaixo!

<small><strong>(Nota: Você também pode visualizar o css compilado na demo).</strong></small>

<p data-height="300" data-theme-id="16160" data-slug-hash="oBJWoB" data-default-tab="css,result" data-user="hjdesigner" data-embed-version="2" data-pen-title="Botão com sombra longa com CSS3 e SASS" class="codepen">See the Pen <a href="http://codepen.io/hjdesigner/pen/oBJWoB/">Botão com sombra longa com CSS3 e SASS</a> by Henrique Rodrigues (<a href="http://codepen.io/hjdesigner">@hjdesigner</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Nós buscaremos melhores práticas para fazer nosso código mais reutilizáveis, onde para receber valores corretos das cores para todas marcas popular e utilizando fontes de ícones. O resultado final não irá usar javascript e nem imagens.

Então vamos escrever dentro do código para nosso botão com sombra longa!


<strong>Usando fontes ícones e preparando nosso HTML</strong>


Então, se utilizamos ambos Zocial e Font Awesome. Nós utilizamos ambos porque temos mais ícones para mostrar, e nesse caso porque o Zocial Facebook Ícone parece ruim IMO ( E eu escolhi fazer botões sociais de sombra longas para esse artigo).

Então vamos importar a fontes para nosso ícone de sombra longa com SASS e CSS.

<small><strong>Nota: Eu usei a sintaxe SCSS qual é a sintaxe de preferência desde o SASS 3.</strong></small>

{% highlight css linenos%}
  @import url(http://weloveiconfonts.com/api/?family=fontawesome|zocial);
  html, body{
  	width: 100%;
  	height: 100%;
  	min-height: 100%;
  	background-color: #30303A;
  	display: flex;
    align-items: center;
    justify-content: center;
  }
  /* fontawesome */
  [class*="fontawesome-"]:before {
    font-family: 'FontAwesome', sans-serif;
  }
  /* zocial */
  [class*="zocial-"]:before {
    font-family: 'Zocial', sans-serif;
  }
{% endhighlight %}

Agora, então adicionamos o HTML correspondente. Fazemos um embrulho de div de modo a fornecer uma class para os icons. Dentro de que podemos simplesmente colocar um tags para ligar para a nossa mídia social.

{% highlight html %}
<div class="icons">
  <a href="#" class="zocial-twitter twitter social-icon"></a>
  <a href="#" class="fontawesome-facebook facebook social-icon"></a>
  <a href="#" class="zocial-stumbleupon stumbleupon social-icon"></a>
  <a href="#" class="zocial-googleplus google-plus social-icon"></a>
</div>
{% endhighlight %}

<strong>Estilos para o botões</strong>

Agora, como você pode ver além das classes do ícone, além disso eu adicionei a classes twitter, facebook, stumbleupon e google-plus, como também a class social-icon. Eu adicionei isso para melhorar a reutilização do CSS.

O plano aqui é fazer nosso CSS ser reutilizado quando possível. Nós usaremos o twitter, facebook.. classes para marcar a cores deles coincidindo valores da sombra. Um bom website para obter os valores da cor é o (BrandColors). Nós vamos usar a classe social-icon para gerar o estilo do icon/button (size, border-radius….).

Então vamos estilizar estas classes!

{% highlight css linenos%}
  .social-icon{
    text-decoration: none;
    color: white;
    display: inline-block;
    font-size: 2.5em;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 40px;
    overflow: hidden;
    margin: 0 10px;
    text-align: center;
  }
{% endhighlight %}

Este é apenas o estilo geral para um botão de ícones arredondado com 80px. Você pode reutilizar essa classe para outros (sombras não longa) botões se você quiser!

Agora, vamos adicionar algumas variáveis para nossa cores da marca.

{% highlight css linenos%}
  $color-twitter: #55acee;
  $color-facebook: #3b5998;
  $color-stumbleupon: #f74425;
  $color-google-plus: #dd4b39;
{% endhighlight %}

Nós vamos criar esses valores para o background-color,  e depois usamos a função darken() para escurecer a cor para usar como uma cor sombra.
Antes nós podemos fazer nossa sombra longa, embora tenhamos que adicionar esta definição na função do SASS:

{% highlight css linenos%}
  @function makelongshadow($color){
    $val: 0px 0px $color;
    @for $i from 1 through 35 {
      $val: #{$val}, #{$i}px #{$i}px #{$color};
    }
    @return $val;
  }
{% endhighlight %}

Essencialmente ela disponibiliza 35 valores de sombra. Você poderia fazer aquele número 35 menores ou maiores de acordo com o tamanho do seus botões.

Agora, vamos usar essas cores e a função makelongshadow para finalizar nossos botões long-shadow!

{% highlight css linenos%}
  .twitter {
    background: $color-twitter;
    text-shadow: makelongshadow(darken($color-twitter, 10%));
  }

  .facebook {
    background: $color-facebook;
    text-shadow: makelongshadow(darken($color-facebook, 10%));
  }

  .stumbleupon {
    background: $color-stumbleupon;
    text-shadow: makelongshadow(darken($color-stumbleupon, 10%));
  }

  .google-plus {
    background: $color-google-plus;
    text-shadow: makelongshadow(darken($color-google-plus, 10%));
  }
{% endhighlight %}

<strong>É isso ai!</strong>

Vamos olhar para a sombra CSS em um dos nosso botões com nossa sombra longa.

{% highlight css linenos%}

  .google-plus {
    background: #dd4b39;
    text-shadow: 0px 0px #c23321,
                1px 1px #c23321,
                2px 2px #c23321,
                3px 3px #c23321,
                4px 4px #c23321,
                5px 5px #c23321,
                6px 6px #c23321,
                7px 7px #c23321,
                8px 8px #c23321,
                9px 9px #c23321,
                10px 10px #c23321,
                11px 11px #c23321,
                12px 12px #c23321,
                13px 13px #c23321,
                14px 14px #c23321,
                15px 15px #c23321,
                16px 16px #c23321,
                17px 17px #c23321,
                18px 18px #c23321,
                19px 19px #c23321,
                20px 20px #c23321,
                21px 21px #c23321,
                22px 22px #c23321,
                23px 23px #c23321,
                24px 24px #c23321,
                25px 25px #c23321,
                26px 26px #c23321,
                27px 27px #c23321,
                28px 28px #c23321,
                29px 29px #c23321,
                30px 30px #c23321,
                31px 31px #c23321,
                32px 32px #c23321,
                33px 33px #c23321,
                34px 34px #c23321,
                35px 35px #c23321;
  }

{% endhighlight %}

Isso é um monte de sombras, certo? Obrigado SASS por tornar minha vida fácil!

<strong>Créditos</strong>

<a href="http://creative-punch.net/2014/03/long-shadow-buttons-css3-sass/" target="_blank">Long Shadow Buttons with CSS3 and Sass</a> por: <a href="http://creative-punch.net/author/CreativePunch/">Creative Punch</a>
