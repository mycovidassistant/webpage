
  
  
      function attachHospital(hosp){
        console.log(hosp)
        htmlFormatted  = " <div class= \"container info-box\">  <div class=\"hospital-info\"> <h1>"+ hosp.name +"</h1><p class=\"address\">Sangrur Road, New Lal Bagh Colony, Patiala, Punjab 147001</p><button type=\"button\" class=\"btn btn-primary\"  onclick=\"location.href = 'https://www.google.com/search?q="+hosp.name + " ';\" >FIND US</button></div> <div class=\"bed-box\">       <p class=\"px-3 about-content text-justify\">L2 Beds Available:"+ hosp.l2_occupied+" out of "+ hosp.l2_beds+ "</p> <p class=\"px-3 about-content text-justify\">L3 Available:"+ hosp.l3_occupied+" out of "+ hosp.l3_beds+"</p>     </div>       </div> "
        $("#listView").prepend(htmlFormatted)
      }
  
      $(document).ready(function() {
          console.log('working');
          fetchURL = "https://covid.knk.codes/zzz" 
          $.ajax({
            url: fetchURL,
            dataType: 'json',
            url: fetchURL,
            
            crossDomain : true,
           
            method: "GET",
            success: function(data) {
                console.log(data)
                govtList = data.govt
                privateList = data.private
                generateCards(govtList)

            },
            error: function(data) {
                console.log("error")
                console.log(data)
            }
        })
         
  
  
  
  
  
  
  
          function generateCards(list){
              console.log(list)
              if(list == 0 ){
                  $("#listView").text('Can\'t connect with the server--- ERR404')
              }else  {
                  $.each(list, function(key,value) {
                      attachHospital(value)
                      // updateHashLink()
                   
                  },);    
              }   
  
          } 
          $(document).on('click', '#private', function(e){
            e.preventDefault();
            $('#listView').html("")
            generateCards(privateList)
          });
          $(document).on('click', '#govt', function(e){
            e.preventDefault();
            $('#listView').html("")
            generateCards(govtList)
          });
  
         


      });