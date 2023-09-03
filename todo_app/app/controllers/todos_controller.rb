class TodosController < ApplicationController
    before_action :set_todo, only: [:show, :update, :destroy]
  
    # GET /projects/:project_id/todos
    def index
      @project = Project.find(params[:project_id])
      @todos = @project.todos
      render json: @todos
    end
  
    # GET /projects/:project_id/todos/1
    def show
      render json: @todo
    end
  
    # POST /projects/:project_id/todos
    def create
      @project = Project.find(params[:project_id])
      @todo = @project.todos.build(todo_params)
  
      if @todo.save
        render json: @todo, status: :created
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /projects/:project_id/todos/1
    def update
      if @todo.update(todo_params)
        render json: @todo
      else
        render json: @todo.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /projects/:project_id/todos/1
    def destroy
      @todo.destroy
    end
  
    private
  
    def set_todo
      @todo = Todo.find(params[:id])
    end
  
    def todo_params
      params.require(:todo).permit(:name, :deadline, :priority, :complete)
    end
  end
  