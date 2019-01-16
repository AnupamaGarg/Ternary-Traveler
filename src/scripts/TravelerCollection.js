
const TravelersCollection = {
    
    getAllInterests() {
      return fetch("http://localhost:8088/interests")
      .then(response => response.json())
    },
  
    
    postNewInterest(newInterestToSave) {
    
      return fetch("http://localhost:8088/interests", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newInterestToSave)
      })
    }
  }
  
  export default TravelersCollection