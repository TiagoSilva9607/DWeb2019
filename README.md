# UMinho-MEI-Web
  
  
  
**TP1**-Página web sobre Itália.  
**TP2**-Dtd e XML do project record.  
Exercicio 6 e 7 da ficha 3.  
**TP3**-XSL do arqueossitios.    
Project Records XML/XSL.    
**TP4**-Criação de um XSL para converter o ficheiro relativo ao Arqueossítios em vários documentos XML(um para cada Arqueossítio).  
Criação de um servidor de ficheiros, que permite aceder a um determinado documento especificado na query string do URL.  
[Arqueossiteos XSL](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP4/Pr2.xsl)  
[Servidor](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP4/serv_arq.js)  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP4/pr.html)  
**TP5**-Desenvolvimento de um servidor para visualizar e criar novas tarefas.  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP5/pr.html)  
[Servidor](https://github.com/TiagoSilva9607/DWeb2019/tree/master/TP5/Servidor)  
**TP6**-Neste TP6 foi pedido a realização de  adicionar/remover e editar registos de música.  
Para realizar este trabalho utilizei a framework express.  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP6/pr.html)  
[VIEWS](https://github.com/TiagoSilva9607/DWeb2019/tree/master/TP6/myapp/index/views)  
[Index](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP6/myapp/index/routes/index.js)  
[App](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP6/myapp/index/app.js)  
**TP7**-Neste TP7 foi pedido a reliazação de dois exercicios.  
No primeiro exercicio tinhamos de criar 3 querys em MongoDB sobre a base de dados fornecida pelo professor.. 
No segundo exercicio tinhamos de criar um servidor capaz de fazer os seguintes pedidos:  
GET/POST/PUT/DELETE.  
Para realizar este trabalho utilizei a framework express.  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP7/pr.xml)  
[App](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP7/filmes/app.js)  
[VIEWS](https://github.com/TiagoSilva9607/DWeb2019/tree/master/TP7/filmes/views)  
[Route_Filmes](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP7/filmes/routes/filmes.js)  
[Controllers](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP7/filmes/controllers/filmes.js)  
[Models](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP7/filmes/models/filme.js)  
**TP8**  
Neste TP8 foi pedido a reliazação de uma API sobre os premios Nobels. 
Na primeira parte tinhamos de fazer download da base de dados.  
Na segunda parte tinhamos de criar um servidor nodejs que respondesse a uma série de pedidos:  
     GET /api/premios - Devolve a lista de prémios apenas com os campos "year" e "category";  
     GET /api/premios/:id - Devolve a informação completa de um prémio;  
     GET /api/categorias - Devolve a lista de categorias, sem repetições;  
     GET /api/premios?categoria=YYY - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY";  
     GET /api/premios?categoria=YYY e data=AAAA - Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";  
     GET /api/laureados - Devolve uma lista ordenada alfabeticamente por nome dos laureados com os campos correspondentes ao nome, ano do prémio e categoria;    
Para realizar este trabalho utilizei a framework express;  
[Base de Dados](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/prize.json)  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/pr.xml)  
[App](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/premios/app.js)  
[Route_Premios](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/premios/routes/index.js)  
[Controllers](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/premios/controllers/premios.js)  
[Model](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP8/premios/model/premios.js)
          
**TP9**  
Neste TP9 foi pedido a reliazação de uma API sobre os Compositores. 
Na primeira parte tinhamos de fazer download da base de dados e converter para JSON pois estava em XML.  
Na segunda parte tinhamos de criar um servidor nodejs que respondesse a uma série de pedidos:  
    GET /compositores/ - Devolve a lista completa de todos compositores;  
    GET /compositores?ano=??? - Devolve a informação completa dos compositores que tenham essa data de nascimentos ;  
    GET /compositores?anoObito=??? - Devolve a informação completa dos compositores que tenham essa data de obito ;  
    GET /compositores/periodo=??? - Devolve a lista de compositores que tenham o campo "periodo" com o valor "???";  
    GET /compositores?periodo=YYY e ano=AAAA - Devolve a lista de compositores que tenham o campo "periodo" com o valor "YYY" e o campo "ano" com um valor superior a "AAAA";  
Para realizar este trabalho utilizei a framework express.  

[Base de Dados](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/data/compositores.json)  
[Página HTML](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/pr.html)  
[COMANDOS](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/Comandos.txt)  
[App](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/compositores/app.js)  
[Route_Compositores](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/compositores/routes/index.js)  
[Controllers](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/compositores/controllers/compositores.js)  
[Model](https://github.com/TiagoSilva9607/DWeb2019/blob/master/TP9/compositores/model/compositor.js)  
  
    
**PROJETO**  
Neste trabalho pretende-se desenvolver uma aplicação WEB no âmbito da Unidade Curricular de Desenvolvimento Aplicações WEB. Esta aplicação foi construída com o objetivo de servir como um banco de dados para os alunos de Engenharia Informática da Universidade do Minho.  
Nesta aplicação podemos visualizar todas as publicações feitas pelos utilizadores devidamente registados, criar grupos, bem como partilhar ficheiros para todos os utilizadores ou utilizador em específico.  
Neste projeto foram utilizados todos os conhecimentos adquiridos durante o semestre, bem como os utensílios disponibilizados, respetivamente NodeJs para o desenvolvimento da aplicação e MongoDB para a persistência dos dados.  



      



                
          
      
        
     
  
  
# **PG41100**  


           


