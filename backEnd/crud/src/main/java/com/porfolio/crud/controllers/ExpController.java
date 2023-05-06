
package com.porfolio.crud.controllers;

import com.porfolio.crud.Model.ExpModel;
import com.porfolio.crud.Servicios.ExpService;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/experiencias")
public class ExpController {
    
    @Autowired
    private ExpService ExpService;
    
    @GetMapping
    @ResponseBody
    public ArrayList<ExpModel> getExp(){
        return this.ExpService.getExp();
    }
    
    @PostMapping
    public ExpModel saveExp(@RequestBody ExpModel exp){
        return this.ExpService.saveExp(exp);
    }
    
     @PutMapping(path = "/{id}")
    public ResponseEntity<ExpModel> putExp(
            @RequestBody ExpModel request,
            @PathVariable Long id){
        Optional <ExpModel> exp = ExpService.getById(request.getId());
        
         if (!exp.isPresent()){
            return ResponseEntity.notFound().build();
        }

        BeanUtils.copyProperties(request,exp.get());

        ExpService.saveExp(exp.get());

        return ResponseEntity.ok(exp.get());
    }
    
}
