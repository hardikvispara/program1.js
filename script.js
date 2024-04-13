function storeInput() {
    // Initialize an empty array
    const inputArray = [];
    
    
    // Get the input elements
    const name = document.getElementById("frist_detail");
    const brith_date = document.getElementById("brith_date");
    const Email = document.getElementById("Email");
    const phone_number = document.getElementById("phone_number");
    const url_link = document.getElementById("url_link");
    const timing = document.getElementById("timing");
    const gender = document.getElementById("gender");
    const country = document.getElementById("country");
    const religin = document.getElementById("religin");
    const forth_details = document.getElementById("forth_details");
    
    // Get the values of the input elements
    const value1 = name.value;
    const value2 = brith_date.value;
    const value3 = Email.value;
    const value4 = phone_number.value;
    const value5 = url_link.value;
    const value6 = timing.value;
    const value7 = gender.value;
    const value8 = country.value;
    const value9 = religin.value;
    const value10 = forth_details.value;
    
    // inputArray.push(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10);
    
    
    // Print the array to the console
    console.log(inputArray);
    //array of object//
    let myArray = [];
    let myObject= {name:value1,
                    brith_date:value2,
                    Email:value3,
                    phone_number:value4,
                    url_link:value5,
                    timing:value6,
                    gender:value7,
                    country:value8,
                    religin:value9,
                    forth_details:value10,
                }
                // let json = '{"name":value1,"brith_date":value2,}';
                // let obj = JSON.parse(json);  
                myArray.push(myObject)
                
                localStorage.setItem("myObject",JSON.stringify(myArray)) 
                let obj=JSON.parse(localStorage.getItem("myobject"));
                
    
            
            }



 