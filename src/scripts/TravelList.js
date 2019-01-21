import TravelersCollection from "./TravelerCollection"
import Travel from "./Travel"

const TravelList = {

    createTravellist() {
        TravelersCollection.getAllInterestsAndPlaces()
            .then(allInterests => {
                let interestDocFragment = document.createDocumentFragment()

                allInterests.forEach(eachInterest => {
                    let interestHtml = Travel.travelBuilder(eachInterest)
                    interestDocFragment.appendChild(interestHtml)


                })
                let displayArticle = document.querySelector(".display")

                while (displayArticle.firstChild) {
                    displayArticle.removeChild(displayArticle.firstChild);
                }
                displayArticle.appendChild(interestDocFragment)
            })


    }
    


}



export default TravelList