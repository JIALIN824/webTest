"use strict";angular.module("hlApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ui.grid","ui.grid.edit"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/articles",{templateUrl:"views/articles.html",controller:"ArticlesCtrl",controllerAs:"articles"}).when("/gallery",{templateUrl:"views/gallery.html",controller:"GalleryCtrl",controllerAs:"gallery"}).when("/subscribers",{templateUrl:"views/subscribers.html",controller:"SubscribersCtrl",controllerAs:"subscribers"}).when("/aboutme",{templateUrl:"views/aboutme.html",controller:"AboutmeCtrl",controllerAs:"aboutme"}).when("/cambridge",{templateUrl:"views/cambridge.html",controller:"CambridgeCtrl",controllerAs:"cambridge"}).when("/pwestminster",{templateUrl:"views/pwestminster.html",controller:"PwestminsterCtrl",controllerAs:"pwestminster"}).when("/londoneye",{templateUrl:"views/londoneye.html",controller:"LondoneyeCtrl",controllerAs:"londoneye"}).when("/windsor",{templateUrl:"views/windsor.html",controller:"WindsorCtrl",controllerAs:"windsor"}).otherwise({redirectTo:"/"})}]),angular.module("hlApp").controller("MainCtrl",["$scope",function(a){var b="http://localhost:9000/images/";a.setInterval=5e3,a.slides=[{title:"Palace of Wesminister",image:b+"houseOfParliament.jpg",text:"The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom.",url:"/#/pwestminster"},{title:"London Eye",image:b+"londonEye.jpg",text:"The London Eye is a giant Ferris wheel on the South Bank of the River Thames in London.",url:"/#/londoneye"},{title:"River Cam",image:b+"cambridge.jpg",text:"The River Cam is the main river flowing through Cambridge in eastern England.",url:"/#/cambridge"},{title:"Windsor Castle",image:b+"windsorCastle.jpg",text:"Windsor Castle is a royal residence at Windsor in the English county of Berkshire.",url:"/#/windsor"}],a.content=[{img:b+"me.jpg",title:"About Me",summary:"I am Jialin Liu graduated from University Of Wollongong",URL:"/#/aboutme"},{img:b+"london.jpg",title:"This website",summary:"We recommend some great tourist attractions of England for OZ travallers. This guide provides tips such as England Transport System and Attractions' Location",URL:"https://au.linkedin.com/pub/jialin-liu/2b/a41/182"},{img:b+"contact.jpg",title:"Contact Me",summary:"jlin.liu19@gmail.com",URL:"https://au.linkedin.com/pub/jialin-liu/2b/a41/182"}]}]),angular.module("hlApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hlApp").controller("ArticlesCtrl",function(){}),angular.module("hlApp").controller("GalleryCtrl",["$scope",function(a){var b=a.pictures=[],c="/images/",d=["Cambridge","Palace of Westminster","London Eye","Windsor Castle","Big Ben","St Paul's Cathedral","Westminster Abbey","Tower Bridge","Buckingham Palace"],e=["cambridge_s","pWest_s","leye_s","wcastle_s","bben_s","spaul_s","wAbby_s","tBridge_s","bpalace_s"],f=["You will not miss St John's College. Punting in river cam is an excellent experience ","The Palace of Westminster is the meeting place of the House of Commons and the House of Lords","The London Eye is a giant Ferris wheel on the South Bank of the River Thames in London.","Windsor Castle is a royal residence at Windsor in the English county of Berkshire.","Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London","St Paul's Cathedral, London, is an Anglican cathedral","Westminster Abbey is one of the most notable religious buildings in the United Kingdom","Tower Bridge is a combined bascule and suspension bridge in London.","Buckingham Palace is the London residence and principal workplace of the monarch of the United Kingdom."],g=["/#/cambridge","/#/pwestminster","/#/londoneye","/#/windsor","","","","",""];a.rate=5,a.max=10,a.isReadonly=!1,a.addPics=function(a){b.push({src:c+e[a]+".jpg",title:d[a],summary:f[a],url:g[a]})};for(var h=0;9>h;h++)a.addPics(h)}]),angular.module("hlApp").controller("SubscribersCtrl",["$scope","$http","$modal",function(a,b,c){b.get("http://localhost:9000/subscribers.json").success(function(b){a.subscribers=b}),a.gridOptions={data:"subscribers",columnDefs:[{name:"no",displayName:"No."},{name:"name",displayName:"Name"},{name:"userType",displayName:"Subscription Type"},{name:"loyalty",displayName:"Loyalty Score"},{name:"joinDate",displayName:"Date Of Joining"}]},a.showModal=function(){a.newUser={};var b=c.open({templateUrl:"views/add-user.html",controller:"AddNewUserCtrl",resolve:{newUser:function(){return a.newUser}}});b.result.then(function(){a.subscribers.push({no:a.subscribers.length+1,name:a.newUser.name,userType:a.newUser.userType,loyalty:a.newUser.loyalty,joinDate:a.newUser.joinDate})})}}]).controller("AddNewUserCtrl",["$scope","$modalInstance","newUser",function(a,b,c){a.cancel=function(){b.dismiss("cancel")},a.newUser=c,a.saveNewUser=function(){b.close(c)}}]),angular.module("hlApp").controller("AboutmeCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hlApp").controller("CambridgeCtrl",["$scope",function(a){a.data=[{src:"/images/cambridge/1.jpg",des:"Picture shot from the bus"},{src:"/images/cambridge/2.jpg",des:""},{src:"/images/cambridge/3.jpg",des:"standing on the bridge"},{src:"/images/cambridge/4.jpg",des:"willow"},{src:"/images/cambridge/5.jpg",des:"St John's College"},{src:"/images/cambridge/6.jpg",des:""},{src:"/images/cambridge/7.jpg",des:""},{src:"/images/cambridge/8.jpg",des:""}],a.totalItems=a.data.length,a.currentPage=1}]),angular.module("hlApp").controller("LondoneyeCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hlApp").controller("PwestminsterCtrl",["$scope",function(a){a.data=[{src:"/images/pwest/1.jpg",des:""},{src:"/images/pwest/2.jpg",des:""},{src:"/images/pwest/3.jpg",des:""},{src:"/images/pwest/4.jpg",des:""},{src:"/images/pwest/5.cc7e2dec.jpg",des:""},{src:"/images/pwest/6.3f35d46d.jpg",des:""}],a.totalItems=a.data.length,a.currentPage=1}]),angular.module("hlApp").controller("WindsorCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("hlApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/aboutme.html",'<article> <header> <div class="container-fluid"> <div class="row"> <div id="title" class="col-sm-8"> <h1>Jialin Liu</h1> <h3>Aspiring Junior Web Developer</h3> <p>Offer solid proficiency in web usability, web accessibility standards.</p> </div> <div id="img" class="col-sm-4"> <img src="/images/me.692b562d.jpg"> </div> </div> </div> </header> <section> <div class="container-fluid"> <strong>Demonstrate broad strengths in</strong> <ul> <li>Web Application Development</li> <li>Applications Support Engineering</li> <li>Code Reviews & Evaluation</li> <li>Front End Development </li> </ul> </div> </section> <section> <div class="container-fluid"> <h3>Career Overview</h3> <span>Online Learning Zone, Crows Nest 2065</span>&nbsp;&nbsp;&nbsp; <span style="display:inline">Nov 2014 - Aug 2015</span> <strong style="display:block">Front End Developer</strong> <ul> <li>Developed website promotional materials, web banners and optimised landing/ home pages of OnlineLearningZone.com.</li> <li>Designed and implemented company’s website, including development and maintenance utilising ASP.net, HTML/ CSS, MySQL, and JavaScript practices.</li> <li>Built a flexible front-end architecture of the simulation system, reducing development time and improving quality.</li> </ul> </div> </section> <section> <div class="container-fluid"> <h3>Technology Proficiency</h3> <table class="table table-bordered"> <tbody> <tr> <th scope="row">languages:</th> <td class="info">JQuery | JavaScript | CSS3 | C#.NET | HTML5 | C#| AngularJS | ASP.NET | BootStrap </td> </tr> <tr> <th scope="row">Databases:</th> <td class="info">SQL</td> </tr> <tr> <th scope="row">Operating Systems</th> <td class="info">Windows | Mac OS</td> </tr> <tr> <th scope="row">Networking:</th> <td class="info">LAN | VLAN | Windows Server 2003</td> </tr> <tr> <th scope="row">Certification:</th> <td class="info">CCNA</td> </tr> </tbody> </table> </div> </section> <section> <div class="container-fluid"> <h3>Background and Certification</h3> <strong>Master of Computer Science, Major in Network Security & Software Development</strong> <strong>Cisco Certified Network Associate</strong> <strong>Developer Programmer; assessed by the Australia Computer Society (ACS)</strong> </div> </section> </article> <footer> <div class="container-fluid"> <a href="https://au.linkedin.com/pub/jialin-liu/2b/a41/182"> <img src="http://s.c.lnkd.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x25.png" width="160" height="25" border="0" alt="View Jialin LIU\'s profile on LinkedIn"> </a> </div> </footer>'),a.put("views/add-user.html",'<div class="modal-header"> <button type="button" class="close" ng-click="cancel()" data-dismiss="modal" aria-hidden="true"> &times; </button> </div> <div class="modal-body"> <label>Name</label><input type="text" ng-model="newUser.name"> <label>Subscription Type</label><input type="text" ng-model="newUser.userType"> <label>Loyalty Score</label><input type="number" ng-model="newUser.loyalty"> <label>Date of Joining</label><input type="date" ng-model="newUser.joinDate"> <br> <button class="btn btn-success" ng-click="saveNewUser()">Save User</button> </div>'),a.put("views/articles.html",'<h1>Guidance</h1> <accordion> <accordion-group heading="Transport" is-open="true"> <div class="container-fluid"> <h3>Bus</h3> <h4>Bus is the subsidiary of Transport of London, which is an ideal transport for most tourists</h4> <em>Puchasing the Oyster Visitor Cards to enjoy the unlimited travel daily</em> <big style="display:block">For travellers who want to visit Windsor Castle or Cambridge, you should know that Oyster Card is not allowed to use outside of London. I reccomend you to order the train ticket package(inclusive bus ticket used in the destination)</big><br> <big style="display:block">Underground is very busy during the peak hours, catching the bus is a smart choice.</big><br> <figure style="float:right"> <a href="/images/bus.47728244.jpg" target="_blank"><img src="/images/bus.47728244.jpg"></a> <figcaption> A Classic Red Bus </figcaption> </figure> <big style="display:block">London bus is the symbol of this great city as well as the Pillar Box, I suggest you to sit in the front of the top, which is the best seat to observe this city</big> </div> <div class="container-fluid"> <h3>Underground</h3> <h4>The London Underground (also known as the Tube or simply the Underground) is a public rapid transit system serving a large part of Greater London</h4> <em>Puchasing the Oyster Visitor Cards to enjoy the unlimited travel daily</em> <big style="display:block">For travellers who want to visit outside of London, you should purchase separated train tickets.</big><br> <big style="display:block">Underground is very busy during the peak hours, but the high frequency of the tube never worries you</big><br> <figure style="float:right"> <a href="/images/train.6dbc7180.jpg" target="_blank"><img src="/images/train.6dbc7180.jpg"></a> <figcaption> A Northern-line Tube </figcaption> </figure> <big style="display:block">You can catch the tube from Heathrow airport to London City Centre. However there are also two express services which are Heathrow Connect and Heathrow Express operating in the airport</big> </div> </accordion-group> <accordion-group heading="Sightseeing Package"> <div class="container-fluid"> <h3>London Pass</h3> <h4>London Pass is a package can allow travellers enter 60+ attractions in certain days. The ticket price will be higher if you choose the one for longer period</h4> <em>you can purchase the London pass with Oyster Travelcard</em><br> <big style="display:block">You can visit London Pass Website to see the attractions london pass covers</big><br> <big style="display:block">We want to remind you London Pass cannot be used for the visit of St Paul Cathedral, Buckingham Palace, Palace of Westminster, and London Eye. </big><br> <big style="display:block">You can use the London Pass to enjoy the free train service from Paddington station to Windsor Castle.</big><br> <figure style="float:right"> <a href="/images/londonPass.c4a12a1b.jpg" target="_blank"><img src="/images/londonPass.c4a12a1b.jpg"></a> <figcaption> London Pass </figcaption> </figure> </div> <div class="container-fluid"> <h3>2For1 London</h3> <h4>2For1 London is offering 2FOR1 entry to over 150 top London attractions, restaurants, theatres, exhibitions and more. </h4> <em>With the travel cards(You must buy it in the National Rail Station), you just need 1 ticket for 2 visitors</em> <big style="display:block">You can visit Days Out Guide Website to see the attractions 2For1 covers</big><br> <big style="display:block">We want to remind you 2For1 cannot be used for the visit of Buckingham Palace, Palace of Westminster, and Windsor Castle. </big><br> <figure style="float:right"> <a href="/images/2For1.c7658eeb.png" target="_blank"><img src="/images/2For1.c7658eeb.png"></a> <figcaption> 2 For 1 </figcaption> </figure> </div> </accordion-group> <accordion-group heading="Food"> <div class="container-fluid"> <h3>The Mitre</h3> <h4>You will find The Mitre in Cambridge within a short stroll of Trinity Street, Sidney Street and Round Church Street</h4> <em style="display:block">This traditional pub serves delicious Fish & Chips</em><br> <figure class="text-center"> <a href="/images/fishchips.542aecb6.jpg" target="_blank"><img src="/images/fishchips.542aecb6.jpg"></a> <figcaption> Fish & Chips </figcaption> </figure><br> <figure class="text-center"> <a href="/images/chicken.275d8994.jpg" target="_blank"><img src="/images/chicken.275d8994.jpg"></a> <figcaption> Chicken & Chips </figcaption> </figure> </div> <div class="container-fluid"> <h3>Tonic & Remedy</h3> <h4>Apothecary-inspired cocktails and modern takes on classic British dishes in a slick, designer hotel.</h4> <em style="display:block">Beautiful dish and nice services, the address is 151 - 157 City Rd, London EC1Y 1BE, United Kingdom</em><br> <figure class="text-center"> <a href="/images/roastCod.cb540092.jpg" target="_blank"><img src="/images/roastCod.cb540092.jpg"></a> <figcaption> Dish 1 </figcaption> </figure><br> <figure class="text-center"> <a href="/images/dish.61411e2b.jpg" target="_blank"><img src="/images/dish.61411e2b.jpg"></a> <figcaption> Dish 2 </figcaption> </figure><br> <figure class="text-center"> <a href="/images/dessert.1a6eb643.jpg" target="_blank"><img src="/images/dessert.1a6eb643.jpg"></a> <figcaption> Dessert </figcaption> </figure> </div> </accordion-group> </accordion>'),a.put("views/cambridge.html",'<header> <div class="container-fluid"> <h2>Beautiful Cambridge City</h2> </div> </header> <section> <div class="container-fluid row"> <div class="col-sm-8"> <p>Punting in Cambridge, you will see a lot of historical buildings along the river. The most impressive one is St John\'s College. The surface of one building covered by leaves is really stunning, but the interesting thing is when I really walk in the backyard to take some photos, some fog feces on the ground make me hard to move around. It seems that you would better enjoy this building on the boat</p> </div> <div class="col-sm-4"> <a href="/images/stJohn.jpg"> <img class="img-responsive" src="/images/stJohn.jpg"> </a> </div> </div> <div class="container-fluid"> <h3>Some pictures guide you to look around Cambridge</h3> <em style="display:block">When I boarded on the Bus. I told driver I want to go to Cambridge University, driver was laughing and telling me the University is everywhere</em><br> <a href="{{data[currentPage-1].src}}"> <img class="img-responsive" ng-src="{{data[currentPage-1].src}}"></a> <p>{{data[currentPage-1].des}}</p> <pagination total-items="totalItems" ng-model="currentPage" items-per-page="1"></pagination> </div> </section>'),a.put("views/gallery.html",'<h1>Gallery</h1> <div class="img-thumbnail row"> <div class="col-md-4 col-sm-4 col-xs-12" ng-repeat-start="pic in pictures"> <a href="{{pic.url}}"><img ng-src="{{pic.src}}"></a> <rating ng-model="rate" max="max" readonly></rating> <h4>{{pic.title}}</h4> <p>{{pic.summary}}</p> </div> <div class="clearfix" ng-if="$index%3==2"></div> <div ng-repeat-end=""></div> </div>'),a.put("views/londoneye.html","<p>This is the londoneye view.</p>"),a.put("views/main.html",'<div class="container-fluid"> <carousel interval="setInterval"> <slide ng-repeat="slide in slides" active="slide.active"> <a href="{{slide.url}}"><img class="carousel-image" ng-src="{{slide.image}}"></a> <div class="carousel-caption"> <h2>{{slide.title}}</h2> <p>{{slide.text}}</p> </div> </slide> </carousel> <div class="jumbotron"> <h1>Welcome to England\'s Diary</h1> <p> This website introduces some popular attractions of England. </p> </div> </div> <div class="row-fluid"> <div class="col-md-4" ng-repeat="block in content"> <a href="{{block.URL}}" style="text-decoration:none"> <img class="img-circle" ng-src="{{block.img}}"></a> <h3>{{block.title}}</h3> <p>{{block.summary}}</p> </div> </div>'),a.put("views/pwestminster.html",'<header> <div class="container-fluid"> <h2>Palace of Westminster</h2> </div> </header> <section> <div class="container-fluid row"> <div class="col-sm-8"> <p>Fully guided tours of the Houses of Parliament offer a unique combination of one thousand years of history, modern day politics, and stunning art and architecture. </p> </div> <div class="col-sm-4"> <a href="/images/pw.jpg"> <img class="img-responsive" src="/images/pw.jpg"> </a> </div> </div> <div class="container-fluid"> <h3>Houses of Parliament guided tours</h3> <a href="{{data[currentPage-1].src}}"> <img class="img-responsive" ng-src="{{data[currentPage-1].src}}"></a> <p>{{data[currentPage-1].des}}</p> <pager total-items="totalItems" ng-model="currentPage" items-per-page="1"></pager> </div> </section>'),a.put("views/subscribers.html",'<h1>Subscribers</h1> <button class="btn btn-success" ng-click="showModal()">Add New User</button> <br> <div class="gridStyles" ui-grid="gridOptions" ui-grid-edit> </div>'),a.put("views/windsor.html","<p>This is the windsorCastle view.</p>")}]);