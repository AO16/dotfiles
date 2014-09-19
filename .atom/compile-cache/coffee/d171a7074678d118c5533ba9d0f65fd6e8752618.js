(function() {
  var fs;

  fs = require('fs');

  module.exports = {
    configDefaults: {
      showPath: false,
      closeCurrent: false,
      sortByTitle: false
    },
    projectManagerView: null,
    projectManagerAddView: null,
    filename: 'projects.cson',
    fileDir: atom.getConfigDirPath(),
    file: null,
    activate: function(state) {
      this.file = "" + this.fileDir + "/" + this.filename;
      atom.workspaceView.command('project-manager:save-project', (function(_this) {
        return function() {
          return _this.createProjectManagerAddView(state).toggle(_this);
        };
      })(this));
      atom.workspaceView.command('project-manager:toggle', (function(_this) {
        return function() {
          return _this.createProjectManagerView(state).toggle(_this);
        };
      })(this));
      atom.workspaceView.command('project-manager:edit-projects', (function(_this) {
        return function() {
          return _this.editProjects();
        };
      })(this));
      atom.workspaceView.command('project-manager:reload-project-settings', (function(_this) {
        return function() {
          return _this.loadSettings();
        };
      })(this));
      return fs.exists(this.file, (function(_this) {
        return function(exists) {
          if (!exists) {
            return fs.writeFile(_this.file, '{}', function(error) {
              if (error) {
                return console.log("Error: Could not create the file projects.cson - " + error);
              }
            });
          } else {
            return _this.loadSettings();
          }
        };
      })(this));
    },
    loadSettings: function() {
      var CSON;
      CSON = require('season');
      return CSON.readFile(this.file, (function(_this) {
        return function(error, data) {
          var path, project, title, _results;
          if (!error) {
            _results = [];
            for (title in data) {
              project = data[title];
              _results.push((function() {
                var _i, _len, _ref, _results1;
                _ref = project.paths;
                _results1 = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                  path = _ref[_i];
                  if (path === atom.project.getPath()) {
                    if (project.settings != null) {
                      this.enableSettings(project.settings);
                    }
                    break;
                  } else {
                    _results1.push(void 0);
                  }
                }
                return _results1;
              }).call(_this));
            }
            return _results;
          }
        };
      })(this));
    },
    enableSettings: function(settings) {
      var setting, value, _results;
      _results = [];
      for (setting in settings) {
        value = settings[setting];
        _results.push(atom.workspace.eachEditor(function(editor) {
          return editor[setting](value);
        }));
      }
      return _results;
    },
    addProject: function(project) {
      var CSON, projects;
      CSON = require('season');
      projects = CSON.readFileSync(this.file) || {};
      projects[project.title] = project;
      return CSON.writeFileSync(this.file, projects);
    },
    openProject: function(_arg) {
      var options, paths, title;
      title = _arg.title, paths = _arg.paths;
      atom.open(options = {
        pathsToOpen: paths
      });
      if (atom.config.get('project-manager.closeCurrent') || !atom.project.getPath()) {
        return atom.close();
      }
    },
    editProjects: function() {
      var config;
      config = {
        title: 'Config',
        paths: [this.file]
      };
      return this.openProject(config);
    },
    createProjectManagerView: function(state) {
      var ProjectManagerView;
      if (this.projectManagerView == null) {
        ProjectManagerView = require('./project-manager-view');
        this.projectManagerView = new ProjectManagerView(state.projectManagerViewState);
      }
      return this.projectManagerView;
    },
    createProjectManagerAddView: function(state) {
      var ProjectManagerAddView;
      if (this.projectManagerAddView == null) {
        ProjectManagerAddView = require('./project-manager-add-view');
        this.projectManagerAddView = new ProjectManagerAddView(state.projectManagerAddViewState);
      }
      return this.projectManagerAddView;
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICIiLAogICJzb3VyY2VSb290IjogIiIsCiAgInNvdXJjZXMiOiBbCiAgICAiIgogIF0sCiAgIm5hbWVzIjogW10sCiAgIm1hcHBpbmdzIjogIkFBQUE7QUFBQSxNQUFBLEVBQUE7O0FBQUEsRUFBQSxFQUFBLEdBQUssT0FBQSxDQUFRLElBQVIsQ0FBTCxDQUFBOztBQUFBLEVBRUEsTUFBTSxDQUFDLE9BQVAsR0FDRTtBQUFBLElBQUEsY0FBQSxFQUNFO0FBQUEsTUFBQSxRQUFBLEVBQVUsS0FBVjtBQUFBLE1BQ0EsWUFBQSxFQUFjLEtBRGQ7QUFBQSxNQUVBLFdBQUEsRUFBYSxLQUZiO0tBREY7QUFBQSxJQUtBLGtCQUFBLEVBQW9CLElBTHBCO0FBQUEsSUFNQSxxQkFBQSxFQUF1QixJQU52QjtBQUFBLElBT0EsUUFBQSxFQUFVLGVBUFY7QUFBQSxJQVFBLE9BQUEsRUFBUyxJQUFJLENBQUMsZ0JBQUwsQ0FBQSxDQVJUO0FBQUEsSUFTQSxJQUFBLEVBQU0sSUFUTjtBQUFBLElBV0EsUUFBQSxFQUFVLFNBQUMsS0FBRCxHQUFBO0FBQ1IsTUFBQSxJQUFDLENBQUEsSUFBRCxHQUFRLEVBQUEsR0FBRSxJQUFDLENBQUEsT0FBSCxHQUFZLEdBQVosR0FBYyxJQUFDLENBQUEsUUFBdkIsQ0FBQTtBQUFBLE1BRUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFuQixDQUEyQiw4QkFBM0IsRUFBMkQsQ0FBQSxTQUFBLEtBQUEsR0FBQTtlQUFBLFNBQUEsR0FBQTtpQkFDekQsS0FBQyxDQUFBLDJCQUFELENBQTZCLEtBQTdCLENBQW1DLENBQUMsTUFBcEMsQ0FBMkMsS0FBM0MsRUFEeUQ7UUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUEzRCxDQUZBLENBQUE7QUFBQSxNQUlBLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBbkIsQ0FBMkIsd0JBQTNCLEVBQXFELENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFBLEdBQUE7aUJBQ25ELEtBQUMsQ0FB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
//# sourceURL=/Users/Andrew/.atom/packages/project-manager/lib/project-manager.coffee