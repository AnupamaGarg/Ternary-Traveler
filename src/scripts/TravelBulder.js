import TravelersCollection from "./TravelerCollection"


const travelForm = {
createAndAppendFormn(){
    console.log("Hello")

    ////////////Heading of the Form //////////////////
    let formHeader = document.createElement("h3")
    formHeader.textContent = "The Ternary Traveler"

    let InterestField = document.createElement("fieldset")

    ////////////////////  Name Field ////////////////////
    let InterestNameLabel = document.createElement("label")
    InterestNameLabel.textContent = "Name"
    InterestNameLabel.setAttribute("for", "interest__name")
    let InterestNameInput = document.createElement("input")
    InterestNameInput.setAttribute("id", "interest__name")
    InterestNameInput.setAttribute("name", "interst__name")

////////////////////// Description Field ///////////////////

    let InterestdescriptionLabel = document.createElement("label")
    InterestdescriptionLabel.textContent = "Description"
    InterestdescriptionLabel.setAttribute("for", "interest__description")
    let InterestdescriptionInput = document.createElement("input")
    InterestdescriptionInput.setAttribute("id", "interest__description")
    InterestdescriptionInput.setAttribute("name", "interst__description")

//////////////////////////// Cost Field //////////////////

    let InterestCostLabel = document.createElement("label")
    InterestCostLabel.textContent = "Cost"
    InterestCostLabel.setAttribute("for", "interest__cost")
    let InterestCostInput = document.createElement("input")
    InterestCostInput.setAttribute("id", "interest__cost")
    InterestCostInput.setAttribute("name", "interst__cost")

//////////////////////////////// Place Field ////////////////////
 
let InterestPlaceLabel = document.createElement("label")
InterestPlaceLabel.textContent = "Select Place"
InterestPlaceLabel.setAttribute("for", "interest__place")
let InterestPlaceInput = document.createElement("select")
InterestPlaceInput.setAttribute("id", "interest__place")
InterestPlaceInput.setAttribute("name", "interest__place")

TravelersCollection.getAllPlaces()
.then(places => {
    places.forEach(place => {
        let CountryName = document.createElement("option")
                CountryName.textContent += `${place.name}`
                CountryName.setAttribute("value", `${place.id}`)
                CountryName.setAttribute("class", "interest_option")
                InterestPlaceInput.appendChild(CountryName)
 
        
    })

  })
///////////////////// Save Button ///////////////////


let saveButton = document.createElement("button")
saveButton.textContent = "Save"
saveButton.setAttribute("class", "interest__save")
saveButton.addEventListener("click", this.handleAddNewInterest)


    InterestField.appendChild(InterestNameLabel)
    InterestField.appendChild(InterestNameInput)
    InterestField.appendChild(InterestdescriptionLabel)
    InterestField.appendChild(InterestdescriptionInput)
    InterestField.appendChild(InterestCostLabel)
    InterestField.appendChild(InterestCostInput)
    InterestField.appendChild(InterestPlaceLabel)
    InterestField.appendChild(InterestPlaceInput)
    InterestField.appendChild(saveButton)




let formArticle = document.querySelector(".inputForm")
    formArticle.appendChild(InterestField)
},

handleAddNewInterest () {
    console.log("EventListner")
    
    let inputInterestName = document.querySelector("#interest__name").value
    let inputInterestDescription = document.querySelector("#interest__description").value
    let inputInterestCost = document.querySelector("#interest__cost").value
    let inputInterestPlace = document.querySelector("#interest__place").value




let newInterest = {
    name: inputInterestName,
    description: inputInterestDescription,
    cost: inputInterestCost,
    place:inputInterestPlace
  }

  TravelersCollection.postNewInterest(newInterest)
    .then(response => {
      console.log("Promise")
    })
  }
}


export default travelForm