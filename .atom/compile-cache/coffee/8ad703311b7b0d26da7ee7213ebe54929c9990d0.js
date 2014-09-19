(function() {
  var EditorView, ProjectManagerAddView, View, _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  _ref = require('atom'), View = _ref.View, EditorView = _ref.EditorView;

  module.exports = ProjectManagerAddView = (function(_super) {
    __extends(ProjectManagerAddView, _super);

    function ProjectManagerAddView() {
      this.remove = __bind(this.remove, this);
      this.confirm = __bind(this.confirm, this);
      this.focus = __bind(this.focus, this);
      return ProjectManagerAddView.__super__.constructor.apply(this, arguments);
    }

    ProjectManagerAddView.prototype.projectManager = null;

    ProjectManagerAddView.content = function() {
      return this.div({
        "class": 'project-manager overlay from-top'
      }, (function(_this) {
        return function() {
          return _this.div({
            "class": 'editor-container',
            outlet: 'editorContainer'
          }, function() {
            _this.span({
              "class": 'project-manager-editor-title'
            }, 'Project title:');
            return _this.subview('editor', new EditorView({
              mini: true
            }));
          });
        };
      })(this));
    };

    ProjectManagerAddView.prototype.initialize = function() {};

    ProjectManagerAddView.prototype.handleEvents = function() {
      this.editor.on('core:confirm', this.confirm);
      this.editor.on('core:cancel', this.remove);
      return this.editor.find('input').on('blur', this.remove);
    };

    ProjectManagerAddView.prototype.focus = function() {
      this.removeClass('hidden');
      return this.editorContainer.find('.editor').focus();
    };

    ProjectManagerAddView.prototype.confirm = function() {
      var project, _ref1;
      project = {
        title: this.editor.getText(),
        paths: [(_ref1 = atom.project) != null ? _ref1.getPath() : void 0]
      };
      if (project.title) {
        this.projectManager.addProject(project);
      }
      if (project.title) {
        return this.remove();
      }
    };

    ProjectManagerAddView.prototype.remove = function() {
      this.editor.setText('');
      if (atom.workspaceView != null) {
        atom.workspaceView.focus();
      }
      return this.addClass('hidden');
    };

    ProjectManagerAddView.prototype.toggle = function(projectManager) {
      this.projectManager = projectManager;
      atom.workspaceView.append(this);
      this.focus();
      return this.handleEvents();
    };

    return ProjectManagerAddView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLDZDQUFBO0lBQUE7O21TQUFBOztBQUFBLEVBQUEsT0FBcUIsT0FBQSxDQUFRLE1BQVIsQ0FBckIsRUFBQyxZQUFBLElBQUQsRUFBTyxrQkFBQSxVQUFQLENBQUE7O0FBQUEsRUFFQSxNQUFNLENBQUMsT0FBUCxHQUNNO0FBQ0osNENBQUEsQ0FBQTs7Ozs7OztLQUFBOztBQUFBLG9DQUFBLGNBQUEsR0FBZ0IsSUFBaEIsQ0FBQTs7QUFBQSxJQUVBLHFCQUFDLENBQUEsT0FBRCxHQUFVLFNBQUEsR0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxRQUFBLE9BQUEsRUFBTyxrQ0FBUDtPQUFMLEVBQWdELENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQzlDLEtBQUMsQ0FBQSxHQUFELENBQUs7QUFBQSxZQUFBLE9BQUEsRUFBTyxrQkFBUDtBQUFBLFlBQTJCLE1BQUEsRUFBUSxpQkFBbkM7V0FBTCxFQUEyRCxTQUFBLEdBQUE7QUFDekQsWUFBQSxLQUFDLENBQUEsSUFBRCxDQUFNO0FBQUEsY0FBQSxPQUFBLEVBQU8sOEJBQVA7YUFBTixFQUE2QyxnQkFBN0MsQ0FBQSxDQUFBO21CQUNBLEtBQUMsQ0FBQSxPQUFELENBQVMsUUFBVCxFQUF1QixJQUFBLFVBQUEsQ0FBVztBQUFBLGNBQUEsSUFBQSxFQUFNLElBQU47YUFBWCxDQUF2QixFQUZ5RDtVQUFBLENBQTNELEVBRDhDO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBaEQsRUFEUTtJQUFBLENBRlYsQ0FBQTs7QUFBQSxvQ0FRQSxVQUFBLEdBQVksU0FBQSxHQUFBLENBUlosQ0FBQTs7QUFBQSxvQ0FVQSxZQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ1osTUFBQSxJQUFDLENBQUEsTUFBTSxDQUFDLEVBQVIsQ0FBVyxjQUFYLEVBQTJCLElBQUMsQ0FBQSxPQUE1QixDQUFBLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsRUFBUixDQUFXLGFBQVgsRUFBMEIsSUFBQyxDQUFBLE1BQTNCLENBREEsQ0FBQTthQUVBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLE9BQWIsQ0FBcUIsQ0FBQyxFQUF0QixDQUF5QixNQUF6QixFQUFpQyxJQUFDLENBQUEsTUFBbEMsRUFIWTtJQUFBLENBVmQsQ0FBQTs7QUFBQSxvQ0FlQSxLQUFBLEdBQU8sU0FBQSxHQUFBO0FBQ0wsTUFBQSxJQUFDLENBQUEsV0FBRCxDQUFhLFFBQWIsQ0FBQSxDQUFBO2FBQ0EsSUFBQyxDQUFBLGVBQWUsQ0FBQyxJQUFqQixDQUFzQixTQUF0QixDQUFnQyxDQUFDLEtBQWpDLENBQUEsRUFGSztJQUFBLENBZlAsQ0FBQTs7QUFBQSxvQ0FtQkEsT0FBQSxHQUFTLFNBQUEsR0FBQTtBQUNQLFVBQUEsY0FBQTtBQUFBLE1BQUEsT0FBQSxHQUNFO0FBQUEsUUFBQSxLQUFBLEVBQU8sSUFBQyxDQUFBLE1BQU0sQ0FBQyxPQUFSLENBQUEsQ0FBUDtBQUFBLFFBQ0EsS0FBQSxFQUFPLHVDQUFhLENBQUUsT0FBZCxDQUFBLFVBQUQsQ0FEUDtPQURGLENBQUE7QUFJQSxNQUFBLElBQXVDLE9BQU8sQ0FBQyxLQUEvQztBQUFBLFFBQUEsSUFBQyxDQUFBLGNBQWMsQ0FBQyxVQUFoQixDQUEyQixPQUEzQixDQUFBLENBQUE7T0FKQTtBQUtBLE1BQUEsSUFBYSxPQUFPLENBQUMsS0FBckI7ZUFBQSxJQUFDLENBQUEsTUFBRCxDQUFBLEVBQUE7T0FOTztJQUFBLENBbkJULENBQUE7O0FBQUEsb0NBMkJBLE1BQUEsR0FBUSxTQUFBLEdBQUE7QUFDTixNQUFBLElBQUMsQ0FBQSxNQUFNLENBQUMsT0FBUixDQUFnQixFQUFoQixDQUFBLENBQUE7QUFDQSxNQUFBLElBQThCLDBCQUE5QjtBQUFBLFFBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFuQixDQUFBLENBQUEsQ0FBQTtPQURBO2FBRUEsSUFBQyxDQUFBLFFBQUQsQ0FBVSxRQUFWLEVBSE07SUFBQSxDQTNCUixDQUFBOztBQUFBLG9DQWdDQSxNQUFBLEdBQVEsU0FBQyxjQUFELEdBQUE7QUFDTixNQUFBLElBQUMsQ0FBQSxjQUFELEdBQWtCLGNBQWxCLENBQUE7QUFBQSxNQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBbkIsQ0FBMEIsSUFBMUIsQ0FEQSxDQUFBO0FBQUEsTUFFQSxJQUFDLENBQUEsS0FBRCxDQUFBLENBRkEsQ0FBQTthQUdBLElBQUMsQ0FBQSxZQUFELENBQUEsRUFKTTtJQUFBLENBaENSLENBQUE7O2lDQUFBOztLQURrQyxLQUhwQyxDQUFBO0FBQUEiCn0=
//# sourceURL=/Users/Andrew/.atom/packages/project-manager/lib/project-manager-add-view.coffee