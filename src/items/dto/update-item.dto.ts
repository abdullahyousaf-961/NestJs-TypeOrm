import { CreateCommentDto } from './create-comment.dto';
import { CreateTagDto } from './create-tag.dto';

export class UpdateItemDto {
    public: boolean;
    comments: CreateCommentDto[];
    tags: CreateTagDto[];
}
