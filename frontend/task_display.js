class TaskDisplay {
  constructor(tasks) {
    this.tasks = tasks;
  }

  displayTasks() {
    if (!this.tasks) {
      return;  // Should return ""
    }
    return this.tasks.map(task => `${task.id}: ${task.title} (${task.priority})`).join("\n");
  }

  filterByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  getTaskCount() {
    return this.tasks.length.toString();
  }
}

module.exports = TaskDisplay;
