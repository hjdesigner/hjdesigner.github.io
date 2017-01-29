---
layout: post
title:  "Utilizando Sass para gerar cor e box-shadow em um loop"
date:   2017-01-27 18:41:35 -0300
introducao: Utilizando Sass para gerar cor e box-shadow em um loop.
tag: sass, loop em sass, sass para gerar cor
---

Este é um pequeno experimento de quando eu estava mexendo com o ajuste da propriedade do elemento usando Sass em for-loop

<p data-height="300" data-theme-id="16160" data-slug-hash="BpJygm" data-default-tab="css,result" data-user="hjdesigner" data-embed-version="2" data-pen-title="Utilizando Sass para gerar cor e box-shadow em um loop" class="codepen">See the Pen <a href="http://codepen.io/hjdesigner/pen/BpJygm/">Utilizando Sass para gerar cor e box-shadow em um loop</a> by Henrique Rodrigues (<a href="http://codepen.io/hjdesigner">@hjdesigner</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<strong>O HTML</strong>

Este efeito certamente pode ser terminado em poucas linhas. Em particular este exemplo, eu crio o elemento no header com um número interno de elemento de div.

{% highlight html %}
  <header>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </header>
{% endhighlight %}

<strong>Surpresa!</strong>

Você define a variável $elementos que é igual ao número de elementos filho dentro do nosso header. Eu uso esta variável em um for-loop

{% highlight css linenos%}
  $elements: 10

  @for $i from 0 to $elements

{% endhighlight %}

Depois você vai usar o integrador $i para calcular este for-loop

{% highlight css linenos%}
  $elements: 10

  @for $i from 0 to $elements
    $red: ($i*10)+150
    $green: (($i*10)+150)/2
    $blue: (($i*10)+150)/2

{% endhighlight %}

Isso deixará as cores mais brilhantes. Nosso valor mínimo para $red será 150. Seu valor máximo será  250, desde que exista 10 elementos. Você deverá ajustar esses valores de acordo com seus elementos.

Depois você irá usar a variável $i para gerar os seletores CSS. Nós faremos nossas variáveis como texto para que seja utilizado por seletor assim.

{% highlight css linenos%}
  #{$VARIABLE}
{% endhighlight %}

Sabendo disso, nós iremos produzir nossos seletores dentro de nosso loop como este:

{% highlight css linenos%}
  $elements: 10

  @for $i from 0 to $elements
    $red: ($i*10)+150
    $green: (($i*10)+150)/2
    $blue: (($i*10)+150)/2

    header div:nth-child(#{$i})
      background: rgb($red,$green,$blue)
      width: 100%
      height: 30px
      box-shadow: 0 -1px #{($elements - $i)*2}px rgba(0,0,0,0.7)

{% endhighlight %}

<strong>O resultado</strong>

O CSS final completo compilado irá ser como este.

{% highlight css linenos%}
  header div:nth-child(0) {
    background: #964b4b;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 20px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(1) {
    background: #a05050;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 18px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(2) {
    background: #aa5555;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 16px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(3) {
    background: #b45a5a;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 14px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(4) {
    background: #be5f5f;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 12px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(5) {
    background: #c86464;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(6) {
    background: #d26969;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 8px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(7) {
    background: #dc6e6e;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(8) {
    background: #e67373;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.7);
  }

  header div:nth-child(9) {
    background: #f07878;
    width: 100%;
    height: 30px;
    box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.7);
  }
{% endhighlight %}

Nós fazemos tudo com apenas aquelas 10 linhas de Sass (Linhas brancas não incluídas). Quão Impressionante é isso?


<strong>Créditos</strong>

<a href="http://creative-punch.net/2014/01/using-sass-generate-color-box-shadow-loop/" target="_blank">Using Sass to generate color and box-shadow in a loop</a> por: <a href="http://creative-punch.net/author/CreativePunch/">Creative Punch</a>
