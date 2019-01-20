import TravelersCollection from "./TravelerCollection"
import TravelList from "./TravelList";




const Travel ={
    travelBuilder(travelObject) {
        let travelArticle = document.createElement("article")
// In order to have the id of the food item available when the user clicks on the delete and edit button, we set the id of the HTML article element for each food item to contain the id of the item in the API. We are intentionally planning ahead and formating the id this way so that when the buttons are clicked, we can use the split method for strings to get just the id number of the food item to be edited/deleted. Also, because we are using the ids from the API, it also ensures that each delete button has a unique id. By moving the id to the article element, it also gives us a a way to target the whole article element so that we can replace the contents of the article element with a pre-filled form when the user clicks the edit button.
        travelArticle.setAttribute("id", `travel--${travelObject.id}`)
        
        let interestName = document.createElement("h3")
        interestName.textContent =  `Place Name:   ${travelObject.name}`

        let interestPlace = document.createElement("p")
        interestPlace.textContent = ` Place id ${travelObject.placeId}`
    
        let interestDescription = document.createElement("p")
        interestDescription.textContent = `Description: ${travelObject.description}`
    
        let interestCost = document.createElement("p")
        interestCost.textContent = `Cost: ${travelObject.cost}`
      
        let interestReview = document.createElement("p")
        interestCost.textContent = `Review: ${travelObject.review}`

        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.setAttribute("id",`interest--${travelObject.id}`)
        deleteButton.addEventListener("click",()=> {
        let interestId = event.target.id.split("--")[1]
        TravelersCollection.deleteInterest(interestId)
        .then(response =>{
            TravelList.createTravellist()
        })

        })

      
        

        let horizontalRule = document.createElement("hr")

        travelArticle.appendChild(interestName)
        travelArticle.appendChild(interestPlace)
        travelArticle.appendChild(interestDescription)
        travelArticle.appendChild(interestCost)
        travelArticle.appendChild(interestReview)
        travelArticle.appendChild(deleteButton)

        travelArticle.appendChild(horizontalRule)


        return travelArticle

        


        


    }
}
export default Travel