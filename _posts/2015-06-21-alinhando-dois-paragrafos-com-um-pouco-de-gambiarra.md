---
layout: post
title:  "Alinhando dois parágrafos com um pouco de gambiarra"
date:   2016-10-01 20:05:35 -0300
introducao: Essa semana me deparei com um texto inocente no rodapé do site
---

![Imagem Exemplo do parágrafo](assests/img/img-paragrafo.jpg){:height="100px" width="600px"}

Essa semana me deparei com um texto inocente no rodapé do site, porém na hora de colocar ele no código percebi uma pegadinha.

Coloquei cada linha em um parágrafo e no css usei a propriedade text-align: justify sem mistério.

{% highlight html %}
	<footer>
	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem</p>
	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem voluptatibus</p>
	</footer>
{% endhighlight %}
	
{% highlight css linenos%}
	footer{
	  width: 100%;
	  height: auto;
	  float: left;
	  padding: 20px 0;
	  background-color: #000;
	}
	p{
	  width: 600px;
	  height: auto;
	  float: left;
	  color: #FFF;
	  line-height: 12px;
	  text-align: justify;
	  margin: 0 0 0 calc(50% - 300px);
	}
{% endhighlight %}

Só que na hora de ver o resultado olhei que não ficava alinhada que nem o layout, aí foi que percebi a pegadinha.

A segunda linha tem mais palavras do que a primeira, e para compensar isso o designer resolveu colocar um espaçamento lateral na primeira linha.

Eureca…. vou usar letter-spacing, pronto problema resolvido bora mandar o código para produção.

{% highlight css linenos%}
	footer{
	  width: 100%;
	  height: auto;
	  float: left;
	  padding: 20px 0;
	  background-color: #000;
	}
	p{
	  width: 600px;
	  height: auto;
	  float: left;
	  color: #FFF;
	  line-height: 12px;
	  text-align: justify;
    	  margin: 0 0 0 calc(50% - 300px);
	}
	p:first-child{
	  letter-spacing: 1.2px;
	}
{% endhighlight %}

Mas então me veio a mente, e se o texto mudar amanhã?

Além do trabalho de alterar o texto vou ter que ir no css e mudar o espaçamento, e se for outro desenvolvedor que for fazer a manutenção,  ele vai saber que tem que alterar no css?

Ai que entra a gambiarra, vamos colocar no css um after.

{% highlight css linenos%}
	footer{
	  width: 100%;
	  height: auto;
	  float: left;
	  padding: 20px 0;
	  background-color: #000;
	}
	p{
	  width: 600px;
	  height: auto;
	  float: left;
	  color: #FFF;
	  text-align: justify;
	  line-height: 12px;
    	  margin: 0 0 0 calc(50% - 300px);
	}	
	p:after{
	  content: "";
	  width: 100%;
	  display: inline-block;
	}
{% endhighlight %}

Agora se alterar o texto ele continua justificado.

É isso galera, espero que tenham gostado!!!!
