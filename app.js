function show(id){document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0)}
function signup(){const n=document.getElementById('name').value.trim();const p=document.getElementById('pass').value;const p2=document.getElementById('pass2').value;if(!n||!p||p!==p2||!document.getElementById('terms').checked){alert('Preencha os campos, confirme a palavra-passe e aceite os termos.');return}alert('Conta criada no modo demonstração.');show('dashboard')}
function login(){alert('Login demonstrativo.');show('dashboard')}
function deposit(){const v=Number(document.getElementById('dep').value);if(!v){alert('Introduza um valor.');return}alert('Pedido de depósito enviado: '+v.toLocaleString('pt-PT')+' Kz (demonstração).');show('dashboard')}
function withdraw(){const v=Number(document.getElementById('wd').value);if(!v){alert('Introduza um valor.');return}alert('Pedido de levantamento enviado: '+v.toLocaleString('pt-PT')+' Kz (demonstração).');show('dashboard')}
function demo(t){alert(t+' — modo demonstração.')}
show('home');