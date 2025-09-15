//
//  Item.swift
//  Jiten_II
//
//  Created by Tingsong Ou on 9/14/25.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
