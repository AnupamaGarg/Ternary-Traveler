import TravelList from "./Travellist"
import TravelersCollection from "./TravelerCollection"
// import Travel from "./Travel"



const editInterest={

    createAndAppendEditForm(articleId,ObjectToEdit){

        let interestName = document.createElement("h3")
        interestName.value =  ObjectToEdit.name

        let interestPlaceField = document.createElement("p")
        interestPlaceField.value = ObjectToEdit.placeId

        
      
        

        let interestDescriptionField = document.createElement("p")
        interestDescriptionField.value =  ObjectToEdit.description
        
        
        
        let interestCostField = document.createElement("p")

        let interestCostLabel = document.createElement("label")
        interestCostLabel.textContent = "Cost: $"
        let interestCostInput = document.createElement("input")
        interestCostInput.value = ObjectToEdit.cost
    
        interestCostField.appendChild(interestCostLabel)
        interestCostField.appendChild(interestCostInput)
      

        let interestReviewField = document.createElement("p")

        let interestReviewLabel = document.createElement("label")
        interestReviewLabel.textContent = "Review: "
        let interestReviewInput = document.createElement("input")
        interestReviewInput.value = ""
        // interestReviewInput.value = ObjectToEdit.review
    
        interestReviewField.appendChild(interestReviewLabel)
        interestReviewField.appendChild(interestReviewInput)

        let updateButton = document.createElement("button")
        updateButton.textContent = "Update"
        console.log(updateButton)

        updateButton.addEventListener("click", () => {
            let editedInterest = {
              name:interestName.value,
              placeId:interestPlaceField.value,
              description:interestDescriptionField.value,
              cost: interestCostInput.value ,
              review: interestReviewInput.value,
            }
            TravelersCollection.putExistingInterest(ObjectToEdit.id, editedInterest)
            .then(response => {
              TravelList.createTravellist()
            })
          
          })
          let InterestArticle = document.querySelector(`#${articleId}`)
          while (InterestArticle.firstChild) {
            InterestArticle.removeChild(InterestArticle.firstChild);
          }
          InterestArticle.appendChild(interestName)
          InterestArticle.appendChild(interestPlaceField)
          InterestArticle.appendChild(interestDescriptionField)
          InterestArticle.appendChild(interestCostField)
          InterestArticle.appendChild(interestReviewField)
          InterestArticle.appendChild(updateButton)



    }
    
}

export default editInterest