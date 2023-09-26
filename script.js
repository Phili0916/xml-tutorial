const loadButton = document.getElementById('btn-load')
const employeeData = document.querySelector('.employee-display')
const log = document.querySelector(".event-log");

loadButton.addEventListener('click', (e) => {
    e.preventDefault()
    loadData()
})

function handleEvent(e) {
    log.textContent = `${log.textContent}${e.type}: ${e.loaded} bytes transferred\n`;
  }
  


function loadData() {
    //create the XMLHttpRequest Object
    let xhr = new XMLHttpRequest()


    
    //Create the Request GET, POST, UPDATE, DELETE, 
    //then the 2nd param is the url or file path
    //pass the data in asyc = true or sync=false
    //pass an userId (optional)
    //password (optional)
    xhr.open('GET', 'employee.xml', true);
    //send the request(if a post request add 'data')
    xhr.send()
    //when data is sent and loading

    xhr.onload = function() {
        const parser = new DOMParser()
        let XMLDocument = parser.parseFromString(xhr.responseText, "text/xml") 
        const employees = XMLDocument.querySelectorAll("employee")

    function displayEmployees() {
        for(const employee of employees) {
            
            let firstnameElement = document.createElement("p")
            firstnameElement.textContent = `First Name: ${employee.querySelector("firstname").textContent}`
            employeeData.append(firstnameElement)

            let lastnameElement = document.createElement("p")
            lastnameElement.textContent = `Last Name: ${employee.querySelector("lastname").textContent}`
            employeeData.append(lastnameElement)

            let titleElement = document.createElement("p") 
            titleElement.textContent = `Title: ${employee.querySelector("title").textContent}`
            employeeData.append(titleElement)

            let divisionElement = document.createElement("p") 
            divisionElement.textContent = `Division: ${employee.querySelector("division").textContent}`
            employeeData.append(divisionElement)

            let officeElement = document.createElement("p") 
            officeElement.textContent = `Office: ${employee.querySelector("office").textContent}`
            employeeData.append(officeElement)


        }
    }     
        
    displayEmployees()    
    }

}