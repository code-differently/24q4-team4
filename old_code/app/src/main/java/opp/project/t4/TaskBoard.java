package opp.project.t4;

import java.util.ArrayList;
import opp.project.t4.exceptions.ColumnNotFoundException;

public class TaskBoard {
  private ArrayList<Column> columns;
  private String boardTitle;
  private ArrayList<String> activityLog;

  public TaskBoard(String boardTitle) {
    this.boardTitle = boardTitle;
    this.columns = new ArrayList<>();
    this.activityLog = new ArrayList<>();
  }

  public String getBoardTitle() {
    return boardTitle;
  }

  public void displayBoardTitle() {
    System.out.println("Taskboard: " + boardTitle);
  }

  private void logAction(String action) {
    activityLog.add(action);
  }

  public ArrayList<Column> getColumns() {
    return columns;
  }

  public void addColumn(Column column) {
    columns.add(column);
    logAction("Added Column: " + column.getTitle());
  }

  public void removeColumn(Column column) {
    columns.remove(column);
    logAction("Removed Column: " + column.getTitle());
  }

  public void moveTask(Task task, Column fromColumn, Column toColumn)
      throws ColumnNotFoundException {
    fromColumn.removeTask(task);
    toColumn.addTask(task);
    logAction(
        "Moved task: '"
            + task.getTitle()
            + "' from "
            + fromColumn.getTitle()
            + " to "
            + toColumn.getTitle());
  }

  public String getFormattedActivityLog() {
    StringBuilder log = new StringBuilder("Activity log:\n");
    for (String entry : activityLog) {
      log.append(entry).append("\n");
    }
    return log.toString();
  }
}
