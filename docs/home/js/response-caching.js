const githubApi = "https://api.github.com";

const MAINTAINERS_CACHE_NAME = "opendev-maintainers"
const MEMBER_CACHE_NAME = "opendev-member"

//Maintainers cache expiration time in milliseconds: 1 day
const MAINTAINERS_CACHE_EXPIRATION = 86400000

//Member cache expiration time in milliseconds: 1 month
const MEMBER_CACHE_EXPIRATION = 2592000000

export const getAllMaintainers = async () => {
  const maintainersURI = `${githubApi}/orgs/opendevufcg/public_members`
  const cache = await caches.open(MAINTAINERS_CACHE_NAME)

  let maintainersResponse = await cache.match(maintainersURI)

  if(!maintainersResponse) {
    const response = await fetch(maintainersURI)
    const newResponse = new Response(response.body, response)

    newResponse.headers.append("CreatedAt", Date.now())
    await cache.put(maintainersURI, newResponse)
    maintainersResponse = await cache.match(maintainersURI)
  }

  return maintainersResponse.json()
}

export const getMember = async memberId => {
  const memberURI = `${githubApi}/users/${memberId}`
  const cache = await caches.open(MEMBER_CACHE_NAME)

  let memberResponse = await cache.match(memberURI)

  if(!memberResponse) {
    const response = await fetch(memberURI)
    console.log(response)
    const newResponse = new Response(response.body, response)
    newResponse.headers.append("CreatedAt", Date.now())
    await cache.put(memberURI, newResponse)
    memberResponse = await cache.match(memberURI)
  }

  return memberResponse.json()
}

export const resetExpiredCache = async () => {
  const maintainersCache = await caches.open(MAINTAINERS_CACHE_NAME)

  const maintainersKeys = await maintainersCache.keys()

  maintainersKeys.forEach(async req => {
    const response = await maintainersCache.match(req)

    const createdAt = response.headers.get("CreatedAt")
    const currentTime = Date.now()

    if(response.status !== 200 || currentTime - createdAt >= MAINTAINERS_CACHE_EXPIRATION)
      await maintainersCache.delete(req)

  })


  const memberCache = await caches.open(MEMBER_CACHE_NAME)

  const memberKeys = await memberCache.keys()

  memberKeys.forEach(async req => {
    const response = await memberCache.match(req)

    const createdAt = response.headers.get("CreatedAt")
    const currentTime = Date.now()

    if(response.status !== 200 || currentTime - createdAt >= MEMBER_CACHE_EXPIRATION)
      await memberCache.delete(req)

  })

}
