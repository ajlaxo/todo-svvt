import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('Todo App', () => {
  beforeEach(() => {
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  });

  it('adds a new task', () => {
    const input = screen.getByLabelText(/What needs to be done/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(addButton);

    const tasks = screen.getAllByText('Buy milk').filter(
      (el) => el.tagName === 'LABEL'
    );
    expect(tasks.length).toBe(1);
  });

  it('deletes a task', () => {
    const input = screen.getByLabelText(/What needs to be done/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: 'Delete me' } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByRole('button', { name: /Delete Delete me/i });
    fireEvent.click(deleteButton);

    const deletedTask = screen.queryByText('Delete me');
    expect(deletedTask).toBeNull();
  });

  it("toggles a task's completed status", () => {
    const input = screen.getByLabelText(/What needs to be done/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: 'Finish homework' } });
    fireEvent.click(addButton);

    const checkbox = screen.getByLabelText('Finish homework');
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('filters completed tasks', () => {
    const input = screen.getByLabelText(/What needs to be done/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);

    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);

    const task2Checkbox = screen.getByLabelText('Task 2');
    fireEvent.click(task2Checkbox); // Mark Task 2 as completed

    const completedFilterButton = screen.getByRole('button', { name: /Completed/i });
    fireEvent.click(completedFilterButton);

    const visibleTasks = screen.getAllByText('Task 2').filter(
      (el) => el.tagName === 'LABEL'
    );
    expect(visibleTasks.length).toBe(1);

    const hiddenTask = screen.queryByText('Task 1');
    expect(hiddenTask).toBeNull(); // Should not be visible in completed filter
  });
});
