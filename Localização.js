


var btnLocalizacao = document.getElementById("btn_localizacao")
var mapa = document.getElementById("Mapa")
var btnFechar = document.getElementById("btnFecharMapa")

btnLocalizacao.addEventListener('click', ()=>{ /*evento click embutido no btn_localizacao*/
btnLocalizacao.style.display='none';
btnFechar.style.display='block'; /*quando clicado no btn_localizacao, o display do btnFechar é alterado para block, permitindo a visualização*/
mapa.style.display='block'; /*quando clicado no mapa(iframe), o display do mesmo é alterado para block, permitindo a visualização*/
});

btnFechar.addEventListener('click', ()=>{/*evento click embutido no btnFechar*/
btnLocalizacao.style.display='block';
btnFechar.style.display='none'; /*quando clicado no mapa(iframe), o display do btnFechar é alterado para none, não permitindo a visualização*/
 mapa.style.display='none'; /*quando clicado no mapa(iframe), o display do mesmo é alterado para none, não permitindo a visualização*/
})


               