import * as am  from "./api/list.api.module";
import * as vm  from './list.vm';

export const mapMemberListToMv = (list: am.MemberEntity[]): vm.MemberEntity[] => {
  return list.map(mapMemberToVM)
};

const mapMemberToVM = (item: am.MemberEntity) : vm.MemberEntity => ({
  id: item.id,
  login: item.login,
  avatarUrl: item.avatar_url
})