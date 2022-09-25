export interface ChatListProp {
  id?: number;
  Image?: any;
  title?: string;
  description?: string;
  modalDescription?: string;
  type?: string;
}

export interface IdPwInputProp {
  placeholder: string;
  type: string;
  name: string;
  handleUserInput: (e) => void;
  submitSigninInfo: () => void;
}

export interface LoginButtonProp {
  title: string;
  color: string;
  size: number;
  isActive: boolean;
  func: () => void;
}

export interface SNSButtonProp {
  title: string;
  icon: string;
  handleSNSLogin: () => void;
}

export interface PageBoxProp {
  title: string;
  moveTo: string;
}

export interface ChatModalProp {
  onClickToggleModal: () => void;
  id?: number;
  Image: any;
  modalDescription: string | undefined;
  type: string | undefined;
  title: string | undefined;
}

export interface ToMbtiButtonProp {
  title: string;
  icon: string;
  textColor: string;
  buttonColor: string;
  buttonSize: number;
  textSize: number;
}

export interface MainPagesProp {
  backGroundImage: string;
}

export interface LastPageProp extends MainPagesProp {
  title: string;
  subTitle: string;
}

export interface ContentPagesProp extends LastPageProp {
  reverse: boolean;
  id: number;
}

export interface ListData {
  id: number;
  listName: string;
  value: string;
}

export interface PagenatedData {
  account_type: string;
  email: string;
  id: number;
  mbti: string;
  name: string;
  nickname: string;
  status: string;
  thumbnail_url: string;
  user_type: string;
}

export type idProp = number | undefined;

export interface BoardDataProp {
  id?: number;
  title?: string;
  image?: string;
  date?: string;
  writer?: string;
  like?: number;
}

export interface BoardModalProp {
  clickCard?: () => void;
  title?: string;
  date?: string;
  image?: string;
  like?: number;
}

export interface MBTIProps {
  onClickCheck: () => void;
  testId?: number;
  labelName?: string;
}

export interface MBTIEnergyProps extends MBTIProps {
  handleSetEnergyName: (value: string, id: number) => void;
  energyLength?: number;
  onEnergyCheck?: () => void;
}

export interface MBTIRelationProps extends MBTIProps {
  handleSetRelationName: (value: string, id: number) => void;
  relationLength?: number;
  onRelationCheck?: () => void;
}

export interface MBTIReactionProps extends MBTIProps {
  handleSetReactionName: (value: string, id: number) => void;
  reactionLength?: number;
  onReactionCheck?: () => void;
}

export interface MBTIJudgdemnetProps extends MBTIProps {
  handleSetJudgementName: (value: string, id: number) => void;
  judgementLength?: number;
  onJudgementCheck?: () => void;
}

export interface AnswerType {
  testId: number | null;
  answerValue?: string;
}

export interface CheckValidProps {
  errorMessage: string;
}

export interface JoinMBTI {
  mbti?: string;
}

export interface ResultData {
  resultId: number;
  MBTIImage: string;
  MBTI: string;
  MBTICharacter: string;
  content: string;
  MBTIPosition: string;
}

export interface MBTIResultProps {
  id?: number;
  mbti: string;
  score: number;
  layout: string;
}

export interface MBTIScoreProps {
  id?: number | null;
  mbti?: string;
  score?: number | null;
  layout?: string;
}

export interface UserDataProps {
  account_type?: string;
  email?: string;
  mbti?: string;
  name?: string;
  nickname?: string;
  status?: string;
  thumbnail_url?: string;
  user_type?: string;
  id?: number;
}

export interface MainRef<T> {
  current: T;
}

export interface AlertModalProps {
  title: string;
  showAlertModal: string;
  setShowAlertModal: (string) => void;
}

export interface ChatRoomProps {
  room?: number;
}

export interface MessagesProps {
  user?: string;
  text?: string;
  time?: string;
  mbti?: string;
  nickname?: string;
  message;
}
