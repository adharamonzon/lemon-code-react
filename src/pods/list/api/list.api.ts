import { MemberEntity } from "./list.api.module"
export const getMemberList = (organization: string) : Promise<MemberEntity[]> => {
  return (fetch(`https://api.github.com/orgs/${organization}/members`)
    .then((response) => response.json())
  )
}