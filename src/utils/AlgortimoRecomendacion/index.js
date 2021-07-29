const Recruiters = require('../../../api/db/models/recruiters')
const States = require('../../../api/db/models/state')
const { importance, search, area, seniority } = require('./config')

const {
  areaImportance,
  seniorityImportance,
  ratingImportance,
  searchQuantityImportance,
} = importance
const { Search0, Search1, Search2, Search3 } = search
const { areamatch1, areamatch2, areamatch3 } = area
const { senioritymatch1, senioritymatch2, senioritymatch3 } = seniority

const maxPoints =
  areaImportance * areamatch1 + //  0.7 *10 = 7
  seniorityImportance * senioritymatch1 + //0.55 * 10 = 5.5
  ratingImportance * 10 + // 10 * 0.4 = 4
  searchQuantityImportance * Search0 // 10 * 0.8 = 8

const FindRecomendation = (jobArea, jobSeniority) => {
  return Recruiters.findAll({ include: States })
    .then((recruiters) => {
      const TotalPointsByRecruiter = recruiters.map((recruiter) => {
        let totalPoints = 0
        const {
          id,
          rating,
          favoriteArea1,
          favoriteArea2,
          favoriteArea3,
          seniority1,
          seniority2,
          seniority3,
          activeSearch,
        } = recruiter

        //rating
        totalPoints += rating * 2 * ratingImportance

        //active Search
        if (activeSearch === 0)
          totalPoints += Search0 * searchQuantityImportance
        if (activeSearch === 1)
          totalPoints += Search1 * searchQuantityImportance
        if (activeSearch === 2)
          totalPoints += Search2 * searchQuantityImportance
        if (activeSearch === 3)
          totalPoints += Search3 * searchQuantityImportance

        //area

        if (jobArea === favoriteArea1)
          totalPoints += areamatch1 * areaImportance
        if (jobArea === favoriteArea2)
          totalPoints += areamatch2 * areaImportance
        if (jobArea === favoriteArea3)
          totalPoints += areamatch3 * areaImportance

        // seniority

        if (jobSeniority === seniority1)
          totalPoints += senioritymatch1 * seniorityImportance
        if (jobSeniority === seniority2)
          totalPoints += senioritymatch2 * seniorityImportance
        if (jobSeniority === seniority3)
          totalPoints += senioritymatch3 * seniorityImportance

        return {
          recruiter: recruiter.dataValues,
          totalPoints,
          porcentajeMatch: Math.floor((totalPoints / maxPoints) * 100),
        }
      })
      return TotalPointsByRecruiter.sort((a, b) =>
        a.totalPoints > b.totalPoints ? -1 : 1
      )
    })
    .then((data) => [data[0], data[1], data[2]])
}
module.exports = FindRecomendation
// FindRecomendation('Seguros', 'Junior').then((data) => console.log(data))
// // FindRecomendation('Ingenierías', 'Trainee')

// console.log(maxPoints)
