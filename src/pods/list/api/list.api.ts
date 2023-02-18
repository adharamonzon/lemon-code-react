import { MemberEntity } from "./list.api.module"
export const getMemberList = () : Promise<MemberEntity[]> => {
  return (fetch(`https://api.github.com/orgs/lemoncode/members`)
    .then((response) => response.json())
  )
}