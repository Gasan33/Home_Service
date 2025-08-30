import request, { gql } from "graphql-request"

const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/" + process.env.NEXT_PUBLIC_MASTER_URL_KEY + "/master"

const getCategory = async () => {
  const query = gql`
    query Category {
         categories {
             bgcolor {
              hex
             }
            id
             name
              icon {
                   url
                      }
                      }
                }
    `

  const result = await request(MASTER_URL, query)
  return result
}

const getAllBusinessList = async () => {
  const query = gql`
    query BusinessLists {
  businessLists {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    images {
      url
    }
    name
  }
}`
  const result = await request(MASTER_URL, query)
  return result

}

const getBusinessByCategory = async (category) => {
  const query = gql`
  query BusinessLists {
  businessLists(where: {category: {name: "`+ category + `"}}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result
}

const getBusinessById = async (id) => {
  const query = gql`query GetBusinessById {
  businessList(where: {id: "`+ id + `"}) {
    about
    address
    category {
      name
    }
    contactPerson
    email
    id
    name
    images {
      url
    }
  }
}`
  const result = await request(MASTER_URL, query)
  return result
}

const createNewBooking = async (businessId, date, time, userEmail, userName) => {
  const mutationQuery = gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: booked, 
        businessList: {connect: {id: "`+ businessId + `"}},
         date: "`+ date + `", time: "` + time + `", 
         userEmail: "`+ userEmail + `",
          userName: "`+ userName + `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `
  const result = await request(MASTER_URL, mutationQuery)
  return result;
}

const BusinessBookedSlot = async (businessId, date) => {
  const query = gql`
  query BusinessBookedSlot {
    bookings(where: {businessList_some: 
      {id: "`+ businessId + `"}, date: "` + date + `"}) {
      date
      time
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result;
}

const GetUserBookingHistory = async (userEmail) => {
  const query = gql`
  query GetUserBookingHistory {
    bookings(where: {userEmail: "`+ userEmail + `"}
    orderBy: publishedAt_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `
  const result = await request(MASTER_URL, query)
  return result;

}

const GetAllMaids = async () => {
  const query = gql`
  query MyQuery {
  maids {
    id
    image {
      url
    }
    cv {
      url
    }
    firstTimeWorker
    experience
    languages
    maritalStatus
    name
    nationality
    position
    religion
    salary
    skills
    age
    video {
      url
    }

  }
}
  `

  const result = await request(MASTER_URL, query)
  return result;
}

const GetMaidsByNationality = async (nationality) => {
  const query = gql`
  query MyQuery {
  maids(where: {nationality: "`+ nationality + `"}) {
    age
    cv {
      url
    }
    firstTimeWorker
    id
    image {
      url
    }
    languages
    maritalStatus
    name
    nationality
    position
    religion
    salary
    skills
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}
const GetMaidsByLanguages = async (languages) => {
  const query = gql`
  query MyQuery {
  maids(where: {languages_contains_all: "`+ languages + `"}) {
    age
    cv {
      url
    }
    firstTimeWorker
    id
    image {
      url
    }
    languages
    maritalStatus
    name
    nationality
    position
    religion
    salary
    skills
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}
const GetMaidsByReligion = async (religion) => {
  const query = gql`
  query MyQuery {
  maids(where: {religion: "`+ religion + `"}) {
    age
    cv {
      url
    }
    firstTimeWorker
    id
    image {
      url
    }
    languages
    maritalStatus
    name
    nationality
    position
    religion
    salary
    skills
  }
}
  `
  const result = await request(MASTER_URL, query)
  return result;
}

export default {
  getCategory,
  getAllBusinessList,
  getBusinessByCategory,
  getBusinessById,
  createNewBooking,
  BusinessBookedSlot,
  GetUserBookingHistory,
  GetAllMaids,
  GetMaidsByNationality,
  GetMaidsByLanguages,
  GetMaidsByReligion,
}


