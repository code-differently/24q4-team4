package opp.project.t4;

import static org.junit.jupiter.api.Assertions.*;

import java.util.UUID;
import opp.project.t4.exceptions.ColumnNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ColumnTest {
  private Column column;
  private Task task1;
  private Task task2;
  private Task task3;
  Priority priority;
  private UUID id1;
  private UUID id2;
  private UUID id3;

  UUID id = UUID.randomUUID();

  @BeforeEach
  public void setUp() {
    column = new Column("To Do");
    id1 = UUID.randomUUID();
    id2 = UUID.randomUUID();
    id3 = UUID.randomUUID();
    task1 = new Task("Complete Report", "Finish the quarterly report", id1, Priority.HIGH);
    task2 = new Task("Design Review", "Review design documents", id2, Priority.MEDIUM);
    task3 = new Task("Prepare Budget", "Prepare annual budget", id3, Priority.LOW);
    column.addTask(task1);
    column.addTask(task2);
    column.addTask(task3);
  }

  @Test
  public void testToString() {
    String expectedOutput =
        "Column: To Do\n"
            + "Task ID: "
            + id1.toString()
            + "\nTitle: Complete Report\nDescription: Finish the quarterly report\nPriority: HIGH\n"
            + "Task ID: "
            + id2.toString()
            + "\nTitle: Design Review\nDescription: Review design documents\nPriority: MEDIUM\n"
            + "Task ID: "
            + id3.toString()
            + "\nTitle: Prepare Budget\nDescription: Prepare annual budget\nPriority: LOW\n";

    // Check if the actual output matches the expected output
    assertEquals(
        expectedOutput,
        column.toString(),
        "Column's toString method should return formatted task list");
  }

  @Test
  public void testColumnNotFound() {
    column = new Column("This is some bs");

    assertThrows(
        ColumnNotFoundException.class,
        () -> {
          column.removeTask(task1);
        });
  }

  @Test
  public void testProgressPercentage() {
    task1.markAsComplete();
    double expectedPercentage = 33.33;
    assertEquals(
        expectedPercentage,
        column.getProgressPercentage(),
        0.01,
        "progress is equal to 33.33% for 1/3 completed tasks.");
  }
}
