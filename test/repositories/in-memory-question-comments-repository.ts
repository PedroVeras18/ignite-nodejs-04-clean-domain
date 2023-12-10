import { QuestionsCommentsRepository } from "@/domain/forum/application/repositories/question-comments-repository";
import { QuestionComment } from "@/domain/forum/enterprise/entities/question-comment";

export class InMemoryQuestionCommentsRepository implements QuestionsCommentsRepository {
  public items: QuestionComment[] = []

  async findById(id: string) {
    const questionComment = this.items.find(item => item.id.toString() === id)

    if (!questionComment) {
      return null
    }

    return questionComment
  }

  async create(questionComment: QuestionComment): Promise<void> {
    this.items.push(questionComment)
  }

  async delete(questionComment: QuestionComment) {
    const itemIndex = this.items.findIndex(item => item.id === questionComment.id)

    this.items.splice(itemIndex, 1)
  }
}