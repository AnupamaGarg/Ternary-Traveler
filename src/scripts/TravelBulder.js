import TravelersCollection from "./TravelerCollection"
import TravelList from "./TravelList";



const travelForm = {
    // clearForm() {
    //     document.querySelector("#interest__name").value = ""
    //     document.querySelector("#interest__description").value = ""
    // },

    createAndAppendFormn() {
        console.log("Hello")

        ////////////Heading of the Form //////////////////
        let formHeader = document.createElement("h3")
        formHeader.textContent = "The Ternary Traveler"

        let InterestField = document.createElement("div")
        let lineBreak = document.createElement("br")

        ////////////////////  Name Field ////////////////////
        let InterestNameLabel = document.createElement("label")
        InterestNameLabel.textContent = "Name  "
        InterestNameLabel.setAttribute("for", "interest__name")
        let InterestNameInput = document.createElement("input")
        InterestNameInput.setAttribute("id", "interest__name")
        InterestNameInput.setAttribute("name", "interst__name")


        ////////////////////// Description Field ///////////////////

        let InterestdescriptionLabel = document.createElement("label")
        InterestdescriptionLabel.textContent = "Description  "
        InterestdescriptionLabel.setAttribute("for", "interest__description")
        let InterestdescriptionInput = document.createElement("input")
        InterestdescriptionInput.setAttribute("id", "interest__description")
        InterestdescriptionInput.setAttribute("name", "interst__description")

        //////////////////////////// Cost Field //////////////////

        let InterestCostLabel = document.createElement("label")
        InterestCostLabel.textContent = "Cost $ "
        InterestCostLabel.setAttribute("for", "interest__cost")
        let InterestCostInput = document.createElement("input")
        InterestCostInput.setAttribute("id", "interest__cost")
        InterestCostInput.setAttribute("name", "interst__cost")
        InterestCostInput.setAttribute("placeholder", "0.00")

        //////////////////////////////// Place Field ////////////////////

        let InterestPlaceLabel = document.createElement("label")
        InterestPlaceLabel.textContent = "Select Place  "
        InterestPlaceLabel.setAttribute("for", "interest__place")
        let InterestPlaceInput = document.createElement("select")
        InterestPlaceInput.setAttribute("id", "interest__place")
        InterestPlaceInput.setAttribute("name", "interest__place")

        let InterestReviewLabel = document.createElement("label")
        InterestReviewLabel.textContent = "Review "
        InterestReviewLabel.setAttribute("for", "interest__review")
        let InterestReviewInput = document.createElement("input")
        InterestReviewInput.setAttribute("id", "interest__review")
        InterestReviewInput.setAttribute("name", "interst__review")
    

        TravelersCollection.getAllPlaces()
            .then(places => {
                places.forEach(place => {
                    let placeName = document.createElement("option")
                    placeName.textContent += `${place.name}`
                    placeName.setAttribute("value", `${place.id}`)
                    placeName.setAttribute("class", "place_name")
                    InterestPlaceInput.appendChild(placeName)
                


                })

            })
        ///////////////////// Save Button ///////////////////


        let saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        saveButton.setAttribute("class", "interest__save")
        saveButton.addEventListener("click", this.handleAddNewInterest)


        InterestField.appendChild(InterestNameLabel)
        InterestField.appendChild(lineBreak)
        InterestField.appendChild(InterestNameInput)
        InterestField.appendChild(lineBreak)

        InterestField.appendChild(InterestdescriptionLabel)
        InterestField.appendChild(lineBreak)
        InterestField.appendChild(InterestdescriptionInput)
        InterestField.appendChild(lineBreak)

        InterestField.appendChild(InterestCostLabel)
        InterestField.appendChild(lineBreak)
        InterestField.appendChild(InterestCostInput)
        InterestField.appendChild(lineBreak)

        InterestField.appendChild(InterestPlaceLabel)
        InterestField.appendChild(InterestPlaceInput)
        InterestField.appendChild(lineBreak)

        InterestField.appendChild(InterestReviewLabel)
        InterestField.appendChild(InterestReviewInput)
        InterestField.appendChild(lineBreak)

        InterestField.appendChild(saveButton)




        let formArticle = document.querySelector(".inputForm")
        formArticle.appendChild(InterestField)
    },

    handleAddNewInterest() {
        console.log("EventListner")

        let inputInterestName = document.querySelector("#interest__name").value
        let inputInterestDescription = document.querySelector("#interest__description").value
        let inputInterestCost = document.querySelector("#interest__cost").value
        let inputInterestPlaceId = document.querySelector("#interest__place").value
        let inputInterestReview = document.querySelector("#interest__review").value
        




        let newInterest = {

            name: inputInterestName,
            description: inputInterestDescription,
            placeId:inputInterestPlaceId,
            cost: inputInterestCost,
            review:inputInterestReview,
            
        }


        TravelersCollection.postNewInterest(newInterest)
             .then(r=>{
               TravelList.createTravellist()
             })
    }

    

}



export default travelForm