package opp.project.t4;

import static org.junit.jupiter.api.Assertions.*;

import java.util.UUID;
import opp.project.t4.exceptions.ColumnNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class TaskBoardTest {
  private TaskBoard taskBoard;
  private Column column1;
  private Column column2;
  private Task task1;
  private Task task2;
  Priority priority;

  UUID id = UUID.randomUUID();

  @BeforeEach
  public void setUp() {
    // Set up a TaskBoard and Columns for testing
    UUID id1 = UUID.randomUUID();
    UUID id2 = UUID.randomUUID();
    taskBoard = new TaskBoard("Project Board");
    column1 = new Column("To Do");
    column2 = new Column("Done");
    task1 = new Task("Complete Report", "Finish the quarterly report", id1, Priority.HIGH);
    task2 = new Task("Design Review", "Review design documents", id2, Priority.MEDIUM);

    // Add columns to the board and tasks to column1
    taskBoard.addColumn(column1);
    taskBoard.addColumn(column2);
    column1.addTask(task1);
    column1.addTask(task2);
  }

  @Test
  public void testGetBoardTitle() {
    assertEquals(
        "Project Board", taskBoard.getBoardTitle(), "Board title should be 'Project Board'");
  }

  @Test
  public void testAddColumn() {
    Column newColumn = new Column("In Progress");
    taskBoard.addColumn(newColumn);
    assertTrue(
        taskBoard.getColumns().contains(newColumn),
        "Column 'In Progress' should be added to columns");
  }

  @Test
  public void testRemoveColumn() {
    taskBoard.removeColumn(column1);
    assertFalse(
        taskBoard.getColumns().contains(column1), "Column 'To Do' should be removed from columns");
  }

  @Test
  public void testMoveTask() throws ColumnNotFoundException {
    taskBoard.moveTask(task1, column1, column2);
    assertFalse(column1.getTasks().contains(task1), "Task should be removed from 'To Do'");
    assertTrue(column2.getTasks().contains(task1), "Task should be added to 'Done'");
  }

  @Test
  public void testActivityLog() {
    taskBoard.addColumn(new Column("Review"));
    String log = taskBoard.getFormattedActivityLog();
    assertTrue(
        log.contains("Added Column: Review"), "Activity log should contain 'Added Column: Review'");
  }

  @Test
  public void testDisplayBoardTitle() {
    // Capturing console output for testing displayBoardTitle()
    taskBoard.displayBoardTitle();
  }

  @Test
  public void testGetFormattedActivityLog() throws ColumnNotFoundException {
    taskBoard.moveTask(task2, column1, column2);
    String log = taskBoard.getFormattedActivityLog();
    assertTrue(
        log.contains("Moved task: 'Design Review' from To Do to Done"),
        "Activity log should include task move details");
  }
}
