export interface DialogCommentProps {
    featureTitle:string;
    featureId:number;
    open: boolean;
    onClose: () => void;
    onCreateComment: (comment: string) => void;
  }