export class Task {
    id: string;
    name: string;
    duration: number;
    iteration: number;
    nextDueDate: Date;
    price: number;
    daysRemaining: number;

    constructor(json) {
        this.id = json.id;
        this.name = json.name;
        this.duration = json.duration;
        this.nextDueDate = new Date(json.nextDueDate);
        this.price = json.price;
        this.daysRemaining = this.daysUntil(new Date(json.nextDueDate));
    }

    private daysUntil(date: Date): number {
        let dueDateInMillis = date.getTime();
        let todayInMillis = new Date().getTime();
        let diff = dueDateInMillis - todayInMillis;
        return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
}