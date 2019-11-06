import * as mongoose from 'mongoose';
import { MONGODB_URL } from '../config';

mongoose.connect(MONGODB_URL).catch((e) => 
{
	console.error('MongoDB Error: ' + e.message); // eslint-disable-line no-console
	process.exit(1);
});

import MastodonApp, {IMastodonApp} from './apps';
import QuestionLike, {IQuestionLike} from './question_likes';
import Question, {IQuestion} from './questions';
import User, {IUser} from './users';

export {
	MastodonApp, IMastodonApp,
	User, IUser,
	Question, IQuestion,
	QuestionLike, IQuestionLike
};
